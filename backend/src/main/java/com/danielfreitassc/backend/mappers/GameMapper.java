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

    @Mapping(target = "genre", source = "genre", qualifiedByName = "genreToName")
    @Mapping(target = "label", source = "genre", qualifiedByName = "genreToLabel")
    GameGenreResponse toGenres(GameEntity gameEntity);

    @Named("genreToName")
    default String genreToName(GameGenre genre) {
        return genre != null ? genre.name() : null;
    }
    
    @Named("genreToLabel")
    default String genreToLabel(GameGenre genre) {
        return genre != null ? genre.getDescription() : null;
    }    
}


