package github.senasaulo.imageliteapi.application.images;

import java.io.IOException;
import java.net.URI;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import github.senasaulo.imageliteapi.domain.entity.Image;
import github.senasaulo.imageliteapi.domain.service.ImageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/v1/images")
@Slf4j
@RequiredArgsConstructor
public class ImagesController {
	
	private final ImageService service;
	private final ImageMapper mapper;
	
	@PostMapping
	public ResponseEntity<Void> save(
			@RequestParam("file") MultipartFile file,
			@RequestParam("name") String name,
			@RequestParam("tags") List<String> tags
		) throws IOException{

		log.info("Imagem recebida : name:{} , size:{}",file.getOriginalFilename(), file.getSize());
		log.info("Nome Definifo para a imagem {}", name);
		log.info("Tags {}",tags);
		log.info("Content Type {}", file.getContentType());
		log.info("Media Type {}", MediaType.valueOf(file.getContentType()));

		
		Image image = mapper.mapToImage(file, name,tags);
		Image savedImage = service.save(image);
		URI imageUri = buildImageUri(savedImage);

		return ResponseEntity.created(imageUri).build();
	}
	
	@GetMapping("{id}")
	public ResponseEntity<byte[]> getImage(@PathVariable String id) {
		var possibleImage = service.findById(id);
		if (possibleImage.isEmpty()) {
			return ResponseEntity.notFound().build();
		}

		var image = possibleImage.get();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(image.getExtension().getMediaType());
		headers.setContentLength(image.getSize());
		headers.setContentDispositionFormData("inline; filename=\"" + image.getFileName() + "\"", image.getFileName());
		return new ResponseEntity<>(image.getFile(), headers, HttpStatus.OK);
	}

	private URI buildImageUri(Image image) {
		String uriString = "/" + image.getId();
		return ServletUriComponentsBuilder.fromCurrentRequest()
				.path(uriString)
				.build()
				.toUri();
	}
}
