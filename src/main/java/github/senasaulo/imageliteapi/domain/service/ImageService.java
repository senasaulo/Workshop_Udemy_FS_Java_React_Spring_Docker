package github.senasaulo.imageliteapi.domain.service;

import github.senasaulo.imageliteapi.domain.entity.Image;

public interface ImageService {
    Image save(Image image);
    Image findById(String id);
}
