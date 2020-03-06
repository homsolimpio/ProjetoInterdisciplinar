package br.com.unievangelica.ftt.domain.ginasio;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.endereco.Endereco;
import br.com.unievangelica.ftt.domain.quadra.Quadra;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "ginasio")
public class Ginasio  extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Column(name = "nome", length = 80, nullable = false)
    private String nome;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    @JsonIgnore
    @OneToMany(mappedBy = "ginasio")
    private Set<Quadra> quadra;

}
