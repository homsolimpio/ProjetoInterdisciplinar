package br.com.unievangelica.ftt.domain.endereco.cidade;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CidadeRepository extends JpaRepository<Cidade, Long> {

    List<Cidade> findCidadesByEstadoId(long estadoId);
}
