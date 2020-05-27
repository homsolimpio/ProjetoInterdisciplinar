package br.com.unievangelica.ftt.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "select * from user_cliente as uc\n" +
            "where CAST(uc.email AS VARCHAR(100)) LIKE :userClienteEmail \n" +
            "and CAST(uc.senha AS VARCHAR(100)) LIKE :userClienteSenha",
            nativeQuery = true)
    public User autenticacaoUser(@Param("userClienteEmail") String userClienteEmail,
                                  @Param("userClienteSenha") String userClienteSenha);
}
