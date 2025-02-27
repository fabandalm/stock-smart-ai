# Use Eclipse Temurin JDK 21 as the base image for building
FROM eclipse-temurin:21-jdk AS builder

# Set the working directory
WORKDIR /app

# Copy Gradle files first for better caching
COPY gradlew build.gradle settings.gradle ./
COPY gradle gradle

# Give execute permission to the Gradle wrapper
RUN chmod +x gradlew

# Copy the application source code
COPY src src

# Build the application using Gradle
RUN ./gradlew clean build -x test

# Use a lightweight JDK 21 runtime for the final image
FROM eclipse-temurin:21-jre

# Set working directory inside the container
WORKDIR /app

# Copy the built JAR from the builder stage
COPY --from=builder /app/build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
