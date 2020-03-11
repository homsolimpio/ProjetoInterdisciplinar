package br.com.unievangelica.ftt.domain.endereco.cidade;


import br.com.unievangelica.ftt.core.service.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CidadeService extends AbstractService<Cidade> {

    @Autowired
    CidadeRepository cidadeRepository;

    public List<Cidade> findCidadeByEstadoId(long estadoId) {

        return cidadeRepository.findCidadesByEstadoId(estadoId);

    }

}
