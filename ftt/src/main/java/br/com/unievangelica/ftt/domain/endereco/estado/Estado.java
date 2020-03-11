package br.com.unievangelica.ftt.domain.endereco.estado;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import br.com.unievangelica.ftt.domain.endereco.Endereco;
import br.com.unievangelica.ftt.domain.endereco.cidade.Cidade;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "estado")
public class Estado extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @Column(name = "nome")
    private String nome;

    @Column(name = "uf")
    private String uf;

    @Column(name = "pais")
    private String pais;

    @JsonIgnore
    @OneToMany(mappedBy = "estado")
    private List<Cidade> cidade;

    @JsonIgnore
    @OneToMany(mappedBy = "estado")
    private List<Endereco> endereco;


}
