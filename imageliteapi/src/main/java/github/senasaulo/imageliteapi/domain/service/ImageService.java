package github.senasaulo.imageliteapi.domain.service;

import java.util.List;
import java.util.Optional;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.enums.ImageExtension;

public interface ImageService {
    Image save(Image image);
    
    Optional<Image> findById(String id);

    List<Image> search(ImageExtension extension, String query);
}
