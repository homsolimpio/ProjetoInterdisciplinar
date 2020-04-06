package br.com.unievangelica.ftt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@EnableAutoConfiguration
public class SisQuadrasApplication {

	public static void main(String[] args) {
		SpringApplication.run(SisQuadrasApplication.class, args);

		System.out.println("Testando");
	}


}



	