package com.meshtier.controller;

import com.meshtier.models.Message;
import com.meshtier.services.message.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
public class MessageController {
    @Autowired
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("messages")
    public ResponseEntity<List<Message>> GetAllMessages() {
        return ResponseEntity.ok(messageService.GetAllMessages());
    }

    @GetMapping("messages/read")
    public ResponseEntity<List<Message>> GetAllReadMessages() {
        return ResponseEntity.ok(messageService.GetAllReadMessages());
    }

    @GetMapping("message/{id}")
    public ResponseEntity<Message> GetMessageById(@PathVariable Long id) {
        return ResponseEntity.ok(messageService.GetMessageById(id));
    }

    @PutMapping("message/mark-read/{id}")
    public ResponseEntity<Message> MarkAsRead(@PathVariable Long id) {
        return ResponseEntity.ok(messageService.MarkAsRead(id));

    }

    @GetMapping("message/count-read")
    public ResponseEntity<Long> CountRead() {
        return ResponseEntity.ok(messageService.CountReadMessages());
    }
}
