package com.gobwah.myghiblilist.api.resource;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gobwah.myghiblilist.domain.Role;
import com.gobwah.myghiblilist.domain.User;
import com.gobwah.myghiblilist.service.UserService;
import com.gobwah.myghiblilist.utils.JwtUtils;
import com.gobwah.myghiblilist.utils.ResponseUtils;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(TokenResource.BASE_ROUTE)
@RequiredArgsConstructor
@Slf4j
public class TokenResource {

    public static final String BASE_ROUTE = "/token";

    @Autowired
    private final UserService userService;

    @GetMapping("/refresh")
    public void refreshToken(final HttpServletRequest request, final HttpServletResponse response)
            throws IOException {
        final String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (StringUtils.isBlank(authorizationHeader)) {
            log.error("Authorization header is blank");
            ResponseUtils.sendResponseError(response, HttpServletResponse.SC_FORBIDDEN, "No authorization header");
            return;
        } else if (!authorizationHeader.startsWith("Bearer ")) {
            log.error("Authorization header is not bearer: {}", authorizationHeader);
            ResponseUtils.sendResponseError(response, HttpServletResponse.SC_FORBIDDEN,
                    "Authorization header is not bearer");
            return;
        }

        try {
            final String refreshToken = authorizationHeader.substring("Bearer ".length());
            final DecodedJWT decodedJWT = JwtUtils.getDecodedJWT(refreshToken);
            final String username = decodedJWT.getSubject();

            final User user = userService.getUserByLogin(username);
            final List<String> authorities = user.getRoles().stream().map(Role::getName).toList();
            final String accessToken = JwtUtils.createAccessToken(username, request.getRequestURL().toString(),
                    authorities);

            final Map<String, String> tokens = new HashMap<>();
            tokens.put("acces_token", accessToken);
            tokens.put("refresh_token", refreshToken);
            response.setContentType(MediaType.APPLICATION_JSON_VALUE);
            new ObjectMapper().writeValue(response.getOutputStream(), tokens);
        } catch (final Exception e) {
            log.error("Error logging in: {}", e.getMessage());
            ResponseUtils.sendResponseError(response, HttpServletResponse.SC_FORBIDDEN,
                    e.getMessage());
        }
    }

}
