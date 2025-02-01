package com.danielfreitassc.backend.dtos;

import java.math.BigDecimal;

public record GameResponseDto(
    Long id,
    String name,
    String description,
    String image,
    String genre,
    BigDecimal price
) {
    
}
