package github.senasaulo.imageliteapi.domain.service;

import java.util.Optional;

import github.senasaulo.imageliteapi.domain.entity.Image;

public interface ImageService {
    Image save(Image image);
    
    Optional<Image> findById(String id);
}
