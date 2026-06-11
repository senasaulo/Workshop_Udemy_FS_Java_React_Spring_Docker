package github.senasaulo.imageliteapi.application.jwt;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import github.senasaulo.imageliteapi.domain.AcessToken;
import github.senasaulo.imageliteapi.domain.entity.User;
import io.jsonwebtoken.Jwts;
import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class JwtService {

    private final SecretKeyGeneration KeyGeneration;

    public AcessToken generateToken(User user) {   
        
        var key = KeyGeneration.getKey();
        var expirationDate = generateExpirationDate();
        var claims = generateClaims(user);
        
        String token =  Jwts
                        .builder()
                        .signWith(key)
                        .subject(user.getEmail())
                        .expiration(expirationDate)
                        .claims(claims)
                        .compact();
               

        return new AcessToken(token);
    }

    private Date generateExpirationDate() {
        var expirationMinutes = 60;
        LocalDateTime now = LocalDateTime.now().plusMinutes(expirationMinutes);
        return Date.from(now.atZone(ZoneId.systemDefault()).toInstant());
       
    }

    private Map<String, Object> generateClaims(User user) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("name", user.getName());
        return claims;
    }
}
