package com.danielfreitassc.backend.dtos;

import java.math.BigDecimal;

import com.danielfreitassc.backend.models.GameGenre;

public record GameResponseDto(
    Long id,
    String name,
    String description,
    String image,
    GameGenre genre,
    BigDecimal price
) {
    
}
