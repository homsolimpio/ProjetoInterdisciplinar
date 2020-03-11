package br.com.unievangelica.ftt.domain.endereco.cidade;


import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/cidade")
public class CidadeController extends AbstractController<Cidade> {


    @Autowired
    CidadeService cidadeService;

    @GetMapping("/teste/{estadoId}")
    public ResponseEntity<?> findcidadeByEstadoId(@PathVariable long estadoId){
        System.out.println(estadoId);
        return jsonResponse(cidadeService.findCidadeByEstadoId(estadoId));
    }

}
