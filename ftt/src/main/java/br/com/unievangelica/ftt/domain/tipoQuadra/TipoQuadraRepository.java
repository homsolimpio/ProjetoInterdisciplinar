package br.com.unievangelica.ftt.domain.tipoQuadra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TipoQuadraRepository extends JpaRepository<TipoQuadra, Long> {
}
