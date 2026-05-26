package github.senasaulo.imageliteapi.infra.repository.specs;

import org.springframework.data.jpa.domain.Specification;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.enums.ImageExtension;

public class ImageSpecs{

    private ImageSpecs() {
    }

    public static Specification<Image> extesionEqual(ImageExtension extension) {
        return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.equal(root.get("extension"), extension);
    }
    
    public static Specification<Image> nameEqual(String name) {
        return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like
        (criteriaBuilder.lower(root.get("name")), "%" + name.toLowerCase() + "%");
    }
    public static Specification<Image> tagsEqual(String tags) {
        return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.like
        (criteriaBuilder.lower(root.get("tags")), "%" + tags.toLowerCase() + "%");
    }

}
