//package br.com.unievangelica.ftt.domain.perfil;
//
//import br.com.unievangelica.ftt.core.entity.AbstractEntity;
//import br.com.unievangelica.ftt.domain.usuario.Usuario;
//import lombok.Getter;
//import lombok.Setter;
//import org.hibernate.annotations.Fetch;
//import org.hibernate.annotations.FetchMode;
//import org.springframework.security.core.GrantedAuthority;
//
//import javax.persistence.*;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.NotEmpty;
//import java.util.ArrayList;
//import java.util.List;
//
//@Entity
//@Table(name = "perfil")
//@Getter
//@Setter
//public class Perfil extends AbstractEntity implements GrantedAuthority {
//
//    private static final long serialVersionUID = 1L;
//
//    @Column(name = "nome", length = 80, nullable = false)
//    private String nome;
//
//    @Override
//    public String getAuthority() {
//        return nome;
//    }
//}
