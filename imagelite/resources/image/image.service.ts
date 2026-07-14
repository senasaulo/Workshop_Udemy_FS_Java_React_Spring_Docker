import { ImageDTO } from "./image.resources"; "./image.resources";
import { useAuth } from "../user/authentication.service";


export class ImageService {
    baseUrl: string = process.env.NEXT_PUBLIC_API_URL + "/v1/images" ;
    auth = useAuth();

    async buscar(query: string, extension: string) : Promise<ImageDTO[]> {
        const userSession = this.auth.getUserSession();
        const response = await fetch(`${this.baseUrl}?query=${query}&extension=${extension}`, {
            headers:{
                "Authorization":`Bearer ${userSession?.accessToken}`
            }
        });
        return await response.json();
    }

    async salvar(dados: FormData) : Promise<string> {
        const userSession = this.auth.getUserSession();
        const response = await fetch(this.baseUrl, {
            method: "POST",
            body: dados,
            headers:{"Authorization":`Bearer ${userSession?.accessToken}`}
        });
        return response.headers.get("Location") ?? ''
    }
}
export const useImageService = () => new ImageService();