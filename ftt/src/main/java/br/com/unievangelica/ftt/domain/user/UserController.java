package br.com.unievangelica.ftt.domain.user;


import br.com.unievangelica.ftt.core.controller.AbstractController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/userCliente")
public class UserController extends AbstractController<User> {

    @Autowired
    UserService userService;

    @GetMapping("/autenticacao/{userClienteEmail}/{userClienteSenha}")
    public ResponseEntity<?> autenticacaoUser(@PathVariable String userClienteEmail,
                                                  @PathVariable String userClienteSenha){
        return jsonResponse(userService.autenticacaoUser(userClienteEmail, userClienteSenha));
    }


}
