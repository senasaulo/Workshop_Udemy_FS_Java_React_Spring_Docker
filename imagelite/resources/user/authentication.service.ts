import {AccessToken, Credentials, UserDTO , UserSessionToken} from './user.resources'
import { jwtDecode } from 'jwt-decode';

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

    initSession(token: AccessToken){
        if(token.accessToken){
            const decodedToken: any = jwtDecode(token.accessToken);

            //console.log("DECODED TOKEN: ", decodedToken);

            const userSessionToken : UserSessionToken  ={
                accessToken: token.accessToken,
                email : decodedToken.sub,
                name : decodedToken.name,
                expiration : decodedToken.exp
            }

            this.setUserSession(userSessionToken);
        }
            
    }

    setUserSession(userSessionToken : UserSessionToken){
        localStorage.setItem(AuthService.AUTH_PARAM, JSON.stringify(userSessionToken));
    }

    getUserSession () : UserSessionToken | null{
        const authString = localStorage.getItem (AuthService.AUTH_PARAM);
        if(!authString){
            return null;
        }

        const token : UserSessionToken = JSON.parse(authString);
        return token;
    }

    isSessionValid() : boolean{
        const userSession : UserSessionToken | null = this.getUserSession();
        if(!userSession){
            return false;
        }

        const expiration = userSession.expiration;
        if(expiration){
            const expirationDateInMillis = expiration * 1000;
            return new Date() < new Date(expirationDateInMillis);
        }

        return false;
    }




}

export const useAuth = () => new AuthService();