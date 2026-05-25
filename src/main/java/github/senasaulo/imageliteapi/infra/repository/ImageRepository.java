package github.senasaulo.imageliteapi.infra.repository;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.enums.ImageExtension;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    default List<Image> finbByExtensionAndNameOrTags(ImageExtension extension, String query) {

        Specification<Image> conjunction =(root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.conjunction();
        Specification<Image> spec = Specification.where(conjunction);
        if (extension != null) {
            spec = spec.and((root, criteriaQuery, criteriaBuilder) -> 
                    criteriaBuilder.equal((root.get("extension")), extension));
        }
        if (StringUtils.hasText(query)) {
            spec = spec.and((root, criteriaQuery, criteriaBuilder) -> 
                    criteriaBuilder.or(criteriaBuilder.like(criteriaBuilder.lower(root.get("name")), "%" + query.toLowerCase() + "%"),
                    criteriaBuilder.like(criteriaBuilder.lower(root.get("tags")), "%" + query.toLowerCase() + "%")
            ));
        }

        return findAll(spec);
    }
}
