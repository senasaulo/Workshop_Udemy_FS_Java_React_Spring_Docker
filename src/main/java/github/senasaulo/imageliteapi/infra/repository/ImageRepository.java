package github.senasaulo.imageliteapi.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import github.senasaulo.imageliteapi.domain.entity.Image;

public interface ImageRepository extends JpaRepository<Image, String> {

    

}
