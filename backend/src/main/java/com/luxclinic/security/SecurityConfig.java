package com.luxclinic.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .cors(withDefaults())
            .csrf(AbstractHttpConfigurer::disable) // Disable CSRF for stateless REST APIs
            .authorizeHttpRequests(authz -> authz
                // We'll allow public access to basic endpoints, but require auth for booking if desired.
                // For demonstration, let's secure the POST /api/appointments endpoint
                // .requestMatchers(HttpMethod.POST, "/api/appointments").authenticated()
                .anyRequest().permitAll() // Set to permitAll temporarily for testing without valid Google token
            );
            
            // To enable real JWT validation using Google's JWKS endpoint, you would add:
            // .oauth2ResourceServer(oauth2 -> oauth2.jwt(withDefaults()))
            // and configure spring.security.oauth2.resourceserver.jwt.issuer-uri=https://accounts.google.com in properties

        return http.build();
    }
}
