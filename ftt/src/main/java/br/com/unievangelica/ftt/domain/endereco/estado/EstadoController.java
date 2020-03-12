package br.com.unievangelica.ftt.domain.endereco.estado;

import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/estado")
public class EstadoController  extends AbstractController<Estado> {
}