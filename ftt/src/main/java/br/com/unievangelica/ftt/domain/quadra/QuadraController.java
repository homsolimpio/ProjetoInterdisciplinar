package br.com.unievangelica.ftt.domain.quadra;

import br.com.unievangelica.ftt.core.controller.AbstractController;
import br.com.unievangelica.ftt.domain.garagem.Garagem;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/quadra")
public class QuadraController extends AbstractController<Quadra> {
}
