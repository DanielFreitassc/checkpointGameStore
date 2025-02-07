package com.danielfreitassc.backend.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Named;

import com.danielfreitassc.backend.dtos.GameGenreResponse;
import com.danielfreitassc.backend.dtos.GameResponseDto;
import com.danielfreitassc.backend.models.GameEntity;
import com.danielfreitassc.backend.models.GameGenre;

@Mapper(componentModel = "spring")
public interface GameMapper {

    @Mapping(target = "label", source = "genre", qualifiedByName = "genreToLabel")
    GameResponseDto toDto(GameEntity gameEntity);

    @Named("genreToLabel")
    default String genreToLabel(GameGenre genre) {
        return genre != null ? genre.getDescription() : null;
    }

    @Mapping(target = "genre", ignore = true)
    @Mapping(target = "label", ignore = true)
    GameGenreResponse toGenres(GameGenre gameGenre);
}
