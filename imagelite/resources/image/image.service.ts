import { ImageDTO } from "./image.resources"; "./image.resources";

export class ImageService {
    baseUrl: string = "http://localhost:8080/v1/images" ;

    async buscar(query: string, extension: string) : Promise<ImageDTO[]> {
        const response = await fetch(`${this.baseUrl}?query=${query}&extension=${extension}`);
        return await response.json();
    }

    async salvar(dados: FormData) : Promise<string> {
        const response = await fetch(this.baseUrl, {
            method: "POST",
            body: dados
        });
        return response.headers.get("Location") ?? ''
    }
}
export const useImageService = () => new ImageService();