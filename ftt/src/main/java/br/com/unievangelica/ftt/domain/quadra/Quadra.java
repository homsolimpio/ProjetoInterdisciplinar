package br.com.unievangelica.ftt.domain.quadra;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.tipoQuadra.TipoQuadra;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
@Table(name = "quadra")
public class Quadra extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Column(name = "nome", length = 80, nullable = false)
    private String nome;

    @Column(name = "preco", nullable = false)
    private double preco;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "tipoQuadra_id", referencedColumnName = "id")
    private TipoQuadra tipoQuadra;

}
