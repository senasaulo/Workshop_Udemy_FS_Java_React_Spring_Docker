package github.senasaulo.imageliteapi.application.users;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import github.senasaulo.imageliteapi.domain.AccessToken;
import github.senasaulo.imageliteapi.domain.entity.User;
import github.senasaulo.imageliteapi.domain.exception.DuplicatedTupleException;
import github.senasaulo.imageliteapi.domain.service.UserService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v1/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    @PostMapping
    public ResponseEntity <Object> save(@RequestBody UserDTO dto){
        try{
            User user = userMapper.mapToUser(dto);
            userService.save(user);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (DuplicatedTupleException e) {
            Map<String, String> errorResult = Map.of("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResult);
        }
    }

    @PostMapping("/auth")
    public ResponseEntity <AccessToken> authenticate(@RequestBody CredentialsDTO credentialsDTO) {
        var token = userService.authenticate(credentialsDTO.getEmail(), credentialsDTO.getPassword());
        if(token == null){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }    
        return ResponseEntity.ok(token);
    }    
        
}
