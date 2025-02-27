package com.meshtier.services.message;

import com.meshtier.models.Message;

import java.util.List;

public interface IMessageService {
    List<Message> GetAllMessages();

    List<Message> GetAllReadMessages();

    Message MarkAsRead(Long Id);

    Message GetMessageById(Long Id);

    long CountReadMessages();
}
