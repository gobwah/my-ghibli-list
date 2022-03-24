package com.gobwah.myghiblilist.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class JwtUtils {

    private static final String PARAMTER_REFRESHTOKEN = "refresh_token";
    private static final String PARAMETER_ACCESSTOKEN = "access_token";
    private static final String CLAIM_ROLES = "roles";
    private static final Algorithm ALGORITHM = Algorithm.HMAC256("d8783466-5800-4aef-9aba-0d6e27bcf234".getBytes());
    private static final long DURATION_ACCESSTOKEN = 2 * 60 * 60 * 1000L; // 2h
    private static final long DURATION_REFRESHTOKEN = 30 * 24 * 60 * 60 * 1000L; // 30d

    private JwtUtils() {
        throw new IllegalStateException("Utility class");
    }

    public static DecodedJWT getDecodedJWT(final String token) {
        final JWTVerifier verifier = JWT.require(ALGORITHM).build();
        return verifier.verify(token);
    }

    public static Map<String, String> createTokens(final org.springframework.security.core.userdetails.User user,
            final String requestURL) {
        final List<String> authorities = user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList();

        final String accessToken = createAccessToken(user.getUsername(), requestURL, authorities);
        final String refreshToken = createRefreshToken(user.getUsername(), requestURL);

        final Map<String, String> tokens = new HashMap<>();
        tokens.put(PARAMETER_ACCESSTOKEN, accessToken);
        tokens.put(PARAMTER_REFRESHTOKEN, refreshToken);
        return tokens;
    }

    public static String createAccessToken(final String username, final String requestURL,
            final List<String> authorities) {
        return JWT.create()
                .withSubject(username)
                .withExpiresAt(new Date(System.currentTimeMillis() + DURATION_ACCESSTOKEN))
                .withIssuer(requestURL)
                .withClaim(CLAIM_ROLES, authorities)
                .sign(ALGORITHM);
    }

    public static String createRefreshToken(final String username, final String requestURL) {
        return JWT.create()
                .withSubject(username)
                .withExpiresAt(new Date(System.currentTimeMillis() + DURATION_REFRESHTOKEN))
                .withIssuer(requestURL)
                .sign(ALGORITHM);
    }

    public static UsernamePasswordAuthenticationToken getAuthenticationToken(final String token) {
        final DecodedJWT decodedJWT = getDecodedJWT(token);

        final String username = decodedJWT.getSubject();
        final String[] roles = decodedJWT.getClaim(CLAIM_ROLES).asArray(String.class);
        final Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        Arrays.stream(roles).forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));

        return new UsernamePasswordAuthenticationToken(username, null, authorities);
    }

}
