package github.senasaulo.imageliteapi.domain.service;

import github.senasaulo.imageliteapi.domain.AccessToken;
import github.senasaulo.imageliteapi.domain.entity.User;

public interface UserService {
    
    User getByEmail(String email);
    User save(User user);
    AccessToken authenticate(String email, String password);

}
