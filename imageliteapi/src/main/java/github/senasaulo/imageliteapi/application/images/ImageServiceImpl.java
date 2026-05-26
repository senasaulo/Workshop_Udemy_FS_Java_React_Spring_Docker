package github.senasaulo.imageliteapi.application.images;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.enums.ImageExtension;
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
    public Optional<Image> findById(String id) {
        return repository.findById(id);
    }

    @Override
    public List<Image> search(ImageExtension extension, String query) {
        return repository.finbByExtensionAndNameOrTags(extension, query);
    }

    

}
