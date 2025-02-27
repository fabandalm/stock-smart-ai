package com.meshtier;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@OpenAPIDefinition(info = @Info(title = "SpringBootAPiDocs", version = "1.0.0", description = "API Documentation", contact = @Contact(name = "Fabio Almeida", url = "https://google.com")))
@SpringBootApplication
@EnableScheduling
public class StockSmartAIApplication {

	public static void main(String[] args) {
		SpringApplication.run(StockSmartAIApplication.class, args);
	}

}
