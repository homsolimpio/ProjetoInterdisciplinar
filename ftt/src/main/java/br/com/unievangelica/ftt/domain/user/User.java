package br.com.unievangelica.ftt.domain.user;

import br.com.unievangelica.ftt.core.entity.AbstractEntity;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "userCliente")
public class User extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @Column(name = "nome")
    private String nome;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

}
