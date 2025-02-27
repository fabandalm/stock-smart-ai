package com.meshtier.repositories;

import com.meshtier.models.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findByIsRead(boolean isRead);

    long countByIsRead(boolean isRead);
    
}
