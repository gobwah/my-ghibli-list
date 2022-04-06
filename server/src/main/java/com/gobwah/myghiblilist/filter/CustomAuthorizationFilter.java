package com.gobwah.myghiblilist.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.gobwah.myghiblilist.api.resource.TokenResource;
import com.gobwah.myghiblilist.utils.JwtUtils;
import com.gobwah.myghiblilist.utils.ResponseUtils;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CustomAuthorizationFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(final HttpServletRequest request, final HttpServletResponse response,
            final FilterChain filterChain)
            throws ServletException, IOException {
        if (request.getServletPath().equals("/login")
                || request.getServletPath().equals(TokenResource.BASE_ROUTE + "**")) {
            filterChain.doFilter(request, response);
        } else {
            final String authorizationHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                try {
                    final String token = authorizationHeader.substring("Bearer ".length());
                    final UsernamePasswordAuthenticationToken authToken = JwtUtils.getAuthenticationToken(token);
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                    filterChain.doFilter(request, response);
                } catch (final Exception e) {
                    log.error("Error logging in: {}", e.getMessage());
                    ResponseUtils.sendResponseError(response, HttpServletResponse.SC_FORBIDDEN, e.getMessage());
                }
            } else {
                filterChain.doFilter(request, response);
            }
        }
    }

}
