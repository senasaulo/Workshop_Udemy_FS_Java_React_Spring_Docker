# Estágio 1: Usamos o JDK 25 oficial e instalamos o Maven manualmente nele
FROM eclipse-temurin:25-jdk AS builder
WORKDIR /app

# Instala o Maven dentro do container com Java 25
RUN apt-get update && apt-get install -y maven

# Copia os arquivos do projeto e faz o build
COPY . .
RUN mvn clean package -DskipTests

# Estágio 2: Imagem final leve para execução (Apenas o Java 25)
FROM eclipse-temurin:25-jdk
WORKDIR /app
COPY --from=builder ./app/target/*.jar ./application.jar
EXPOSE 8080

ENV POSTGRES_HOST=localhost
RUN echo "the env var POSTGRES_HOST value is $POSTGRES_HOST"

ENTRYPOINT ["java", "-Dspring.profiles.active=production" , "-jar", "application.jar"]