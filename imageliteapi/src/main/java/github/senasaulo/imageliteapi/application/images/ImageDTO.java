package github.senasaulo.imageliteapi.application.images;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ImageDTO {
    private String url;
    private String name;
    private String extension;
    private long size;
    private LocalDate uploadDate;  
}
