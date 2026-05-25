package github.senasaulo.imageliteapi.application.images;

import java.io.IOException;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.enums.ImageExtension;

@Component
public class ImageMapper {

    public Image mapToImage(MultipartFile file, String name, List<String> tags) throws IOException {
        return Image.builder()
                .name(name)
                .extension(ImageExtension.valueOf(MediaType.valueOf(file.getContentType())))
                .tags(String.join(",", tags))
                .size(file.getSize())
                .file(file.getBytes())
                .build();
    }

    public ImageDTO imageToDTO(Image image, String url) {
        return ImageDTO.builder()
                .name(image.getName())
                .extension(image.getExtension().name())
                .size(image.getSize())
                .uploadeDate(image.getUploadDate())
                .url(url)
                .build();
    }
}
