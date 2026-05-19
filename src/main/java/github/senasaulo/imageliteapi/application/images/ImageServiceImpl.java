package github.senasaulo.imageliteapi.application.images;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.service.ImageService;
import github.senasaulo.imageliteapi.infra.repository.ImageRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepository repository;
    
    @Override
    @Transactional
    public Image save(Image image) {
        return repository.save(image);
    }

    @Override
    public Image findById(String id) {
        return repository.findById(id).orElse(null);
    }

    

}
