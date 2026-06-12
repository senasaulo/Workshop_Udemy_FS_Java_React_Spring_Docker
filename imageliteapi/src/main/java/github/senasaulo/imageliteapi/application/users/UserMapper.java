package github.senasaulo.imageliteapi.application.users;

import github.senasaulo.imageliteapi.domain.entity.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User mapToUser(UserDTO dto) {
        return  User.builder()
                    .email(dto.getEmail())
                    .password(dto.getPassword())
                    .name(dto.getName())
                    .build();
    }
}
