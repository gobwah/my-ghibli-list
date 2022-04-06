package com.gobwah.myghiblilist.security;

import com.gobwah.myghiblilist.api.resource.TokenResource;
import com.gobwah.myghiblilist.api.resource.UserResource;
import com.gobwah.myghiblilist.filter.CustomAuthenticationFilter;
import com.gobwah.myghiblilist.filter.CustomAuthorizationFilter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private final UserDetailsService userDetailsService;
    @Autowired
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Override
    protected void configure(final HttpSecurity http) throws Exception {
        final CustomAuthenticationFilter authConfig = new CustomAuthenticationFilter(authenticationManagerBean());
        authConfig.setFilterProcessesUrl("/login");

        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http.authorizeHttpRequests().antMatchers(HttpMethod.POST, "/login/**")
                .permitAll();
        http.authorizeHttpRequests().antMatchers(HttpMethod.GET, "/login/**")
                .denyAll();
        http.authorizeHttpRequests().antMatchers(HttpMethod.POST, UserResource.BASE_ROUTE + "/**")
                .permitAll();
        http.authorizeHttpRequests().antMatchers(HttpMethod.GET, TokenResource.BASE_ROUTE + "/**")
                .permitAll();
        http.authorizeHttpRequests().antMatchers(HttpMethod.GET, UserResource.BASE_ROUTE + "/**")
                .hasAnyAuthority("ROLE_USER");
        http.addFilter(authConfig);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManager();
    }

}
