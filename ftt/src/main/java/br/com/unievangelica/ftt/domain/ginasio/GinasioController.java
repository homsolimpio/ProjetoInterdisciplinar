package br.com.unievangelica.ftt.domain.ginasio;

import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api/ginasio")
public class GinasioController  extends AbstractController<Ginasio> {
}
