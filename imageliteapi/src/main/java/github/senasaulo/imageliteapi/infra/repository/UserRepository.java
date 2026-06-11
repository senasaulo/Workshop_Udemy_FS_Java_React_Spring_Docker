package github.senasaulo.imageliteapi.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import github.senasaulo.imageliteapi.domain.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

	User findByEmail(String email);
    
}
