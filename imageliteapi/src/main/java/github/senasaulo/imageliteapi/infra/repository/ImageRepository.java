package github.senasaulo.imageliteapi.infra.repository;

import static github.senasaulo.imageliteapi.infra.repository.specs.GenericSpecs.conjunction;
import static github.senasaulo.imageliteapi.infra.repository.specs.ImageSpecs.*;
import static org.springframework.data.jpa.domain.Specification.anyOf;
import static org.springframework.data.jpa.domain.Specification.where;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.util.StringUtils;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.enums.ImageExtension;

public interface ImageRepository extends JpaRepository<Image, String>, JpaSpecificationExecutor<Image> {

    default List<Image> finbByExtensionAndNameOrTags(ImageExtension extension, String query) {

        Specification<Image> spec = where(conjunction());

        if (extension != null) {
            spec = spec.and(extesionEqual(extension));
        }
        if (StringUtils.hasText(query)) {
            spec = spec.and(anyOf(nameEqual(query),tagsEqual(query)));
        }

        return findAll(spec);
    }

}
