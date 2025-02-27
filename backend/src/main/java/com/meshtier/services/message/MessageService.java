package com.meshtier.services.message;

import com.meshtier.models.Message;
import com.meshtier.repositories.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService implements IMessageService {
    private final MessageRepository messageRepository;

    public MessageService(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;

    }

    @Override
    public List<Message> GetAllMessages() {
        return messageRepository.findAll();
    }

    @Override
    public List<Message> GetAllReadMessages() {
        return messageRepository.findByIsRead(true);

    }

    @Override
    public Message MarkAsRead(Long Id) {
        Message message = new Message();
        message.setRead(true);
        return messageRepository.save(message);
    }

    @Override
    public Message GetMessageById(Long Id) {
        return messageRepository.findById(Id).orElseThrow();
    }

    @Override
    public long CountReadMessages() {
        return messageRepository.countByIsRead(false);

    }
}
