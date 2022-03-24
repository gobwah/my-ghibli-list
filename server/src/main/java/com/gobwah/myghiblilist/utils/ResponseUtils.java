package com.gobwah.myghiblilist.utils;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.MediaType;

public class ResponseUtils {

    private ResponseUtils() {
        throw new IllegalStateException("Utility class");
    }

    public static void sendResponseError(final HttpServletResponse response, final int statusCode, final String message)
            throws IOException {
        response.setHeader("error", message);
        response.setStatus(statusCode);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        final Map<String, String> error = new HashMap<>();
        error.put("error_message", message);
        error.put("status_code", String.valueOf(statusCode));
        new ObjectMapper().writeValue(response.getOutputStream(), error);
    }

}
