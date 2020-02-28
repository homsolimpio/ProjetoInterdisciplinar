package br.com.unievangelica.ftt.domain.quadra;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuadraRepository extends JpaRepository<Quadra, Long> {
}
