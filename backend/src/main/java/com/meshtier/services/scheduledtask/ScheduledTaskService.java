package com.meshtier.services.scheduledtask;

import com.meshtier.models.Message;
import com.meshtier.models.Product;
import com.meshtier.repositories.MessageRepository;
import com.meshtier.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScheduledTaskService implements IScheduledTaskService {
    @Autowired
    private final ProductRepository productRepository;
    @Autowired
    private final MessageRepository messageRepository;

    public ScheduledTaskService(ProductRepository productRepository, MessageRepository messageRepository,
                                MessageRepository messageRepository2) {
        this.productRepository = productRepository;
        this.messageRepository = messageRepository2;

    }

    @Override
    @Scheduled(cron = "0 0 8 * * *")
    public void CheckStockEpouisee() {
        List<Product> products = productRepository.findByQuantityLessThanEqual(10);
        for (Product product : products) {
            Message message = new Message();
            message.setRead(false);
            message.setContent("Product : " + product.getName() +
                    "\nL'article " + product.getName() + " est actuellement en rupture de stock." +
                    "\nNous vous recommandons de prendre les mesures suivantes :" +
                    "\n\n1. Notifier le fournisseur pour un réapprovisionnement rapide." +
                    "\n2. Vérifier les alternatives disponibles pour proposer des articles similaires." +
                    "\n3. Suivre les notifications pour être informé lorsque l'article sera de nouveau disponible." +
                    "\n\nNous vous tiendrons informé(e) dès que l’article sera réapprovisionné.");
            message.setTitle("Article " + product.getName() + " est actuellement en rupture de stock.");
            messageRepository.save(message);
        }

    }

}
