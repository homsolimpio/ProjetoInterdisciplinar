package br.com.unievangelica.ftt.domain.tipoQuadra;


import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.quadra.Quadra;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "tipoQuadra")
public class TipoQuadra extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Column(name = "nome", length = 80, nullable = false)
    private String nome;

    @JsonIgnore
    @OneToMany(mappedBy = "tipoQuadra")
    private List<Quadra> quadra;

}
