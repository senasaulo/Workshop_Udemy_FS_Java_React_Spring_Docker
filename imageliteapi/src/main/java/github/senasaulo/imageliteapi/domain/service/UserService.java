package github.senasaulo.imageliteapi.domain.service;

import github.senasaulo.imageliteapi.domain.AcessToken;
import github.senasaulo.imageliteapi.domain.entity.User;

public interface UserService {
    
    User getByEmail(String email);
    User save(User user);
    AcessToken authenticate(String email, String password);

}
