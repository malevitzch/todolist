FROM maven:3.9-eclipse-temurin-20-alpine
WORKDIR /app/
COPY pom.xml .
COPY src ./src
CMD ["mvn", "spring-boot:run"]