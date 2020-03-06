package br.com.unievangelica.ftt.domain.ginasio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GinasioRepository extends JpaRepository<Ginasio, Long> {
}
