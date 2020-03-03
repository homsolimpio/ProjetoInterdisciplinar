package br.com.unievangelica.ftt.domain.tipoQuadra;

import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tipo-quadra")
public class TipoQuadraController extends AbstractController<TipoQuadra> {
}
