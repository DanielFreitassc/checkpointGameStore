package com.danielfreitassc.backend.dtos;

import com.danielfreitassc.backend.models.GameGenre;

public record GameGenreResponse(
    String genre,
    String label
) {
    public static GameGenreResponse from(GameGenre genre) {
        return new GameGenreResponse(genre.name(), genre.getDescription()); 
    }
}
