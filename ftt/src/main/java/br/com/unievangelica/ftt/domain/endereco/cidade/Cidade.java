package br.com.unievangelica.ftt.domain.endereco.cidade;


import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.endereco.Endereco;
import br.com.unievangelica.ftt.domain.endereco.estado.Estado;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "cidade")
public class Cidade extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @Column(name = "nome")
    private String nome;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "estado_id", referencedColumnName = "id")
    private Estado estado;

    @JsonIgnore
    @OneToMany(mappedBy = "cidade")
    private List<Endereco> endereco;
}
