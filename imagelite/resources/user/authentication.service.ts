import {AccessToken, Credentials, UserDTO , UserSessionToken} from './user.resources'

class AuthService{
     baseUrl: string = "http://localhost:8080/v1/users" ;
     static AUTH_PARAM : string = "_auth";

     async authenticate(credentials:Credentials): Promise<AccessToken> {
        const response = await fetch(this.baseUrl + "/auth" , {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers:{
                "Content-Type":"application/json"
            }
        });
        
        if(response.status == 401){
            throw new Error("User ou password are incorrent!")
        }

        return await response.json();
     }

     async save(user:UserDTO) : Promise<void>{
        const response = await fetch(this.baseUrl,{
            method: 'POST',
            body: JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        });

        console.log("response Auth.save", response)
        
        if(response.status == 409){
            throw new Error("User already exists!")
        }
        
     }
}

export const useAuth = () => new AuthService();