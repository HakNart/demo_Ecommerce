FROM eclipse-temurin:17-jdk-alpine as build
COPY backend/demoEcommerce .
RUN /mvnw install

# Package stage
FROM openjdk:17-jdk-slim
COPY --from=build /target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]