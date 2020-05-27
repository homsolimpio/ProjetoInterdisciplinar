package br.com.unievangelica.ftt.domain.user;

import br.com.unievangelica.ftt.core.service.AbstractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService extends AbstractService<User> {

    @Autowired
    UserRepository userRepository;

    public boolean autenticacaoUser(String userClienteEmail, String userClienteSenha) {

        User userCliente = userRepository.autenticacaoUser(userClienteEmail, userClienteSenha);
        System.out.println("objeto banco " + userCliente);
        System.out.println("email " + userClienteEmail);
        System.out.println("senha " + userClienteSenha);
        if(userCliente == null){
            System.out.println("false " + userCliente);
            return false;

        } else {
            System.out.println("true " + userCliente);
            return true;
        }
    }
}
