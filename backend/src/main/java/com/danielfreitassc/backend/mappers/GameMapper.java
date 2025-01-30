package com.danielfreitassc.backend.mappers;

import org.mapstruct.Mapper;

import com.danielfreitassc.backend.dtos.GameGenreResponse;
import com.danielfreitassc.backend.dtos.GameResponseDto;
import com.danielfreitassc.backend.models.GameEntity;

@Mapper(componentModel = "spring")
public interface GameMapper {
    GameResponseDto toDto(GameEntity gameEntity);
    GameGenreResponse toGenres(GameEntity gameEntity);
}
