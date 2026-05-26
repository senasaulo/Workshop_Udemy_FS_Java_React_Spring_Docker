package github.senasaulo.imageliteapi.infra.repository.specs;

import org.springframework.data.jpa.domain.Specification;

public class GenericSpecs {

    private GenericSpecs() {}

    public static <T> Specification<T> conjunction() {
        return (root, criteriaQuery, criteriaBuilder) -> criteriaBuilder.conjunction();
    }


}
