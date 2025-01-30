package com.danielfreitassc.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.danielfreitassc.backend.dtos.GameGenreResponse;
import com.danielfreitassc.backend.dtos.GameResponseDto;
import com.danielfreitassc.backend.mappers.GameMapper;
import com.danielfreitassc.backend.models.GameEntity;
import com.danielfreitassc.backend.repositories.GameRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class GameService {
    private final GameRepository gameRepository;
    private final GameMapper gameMapper;

    public Page<GameResponseDto> get(Pageable pageable, String genre) {
    int limit = pageable.getPageSize();
    int offset = (int) pageable.getOffset();

    List<GameEntity> games = gameRepository.findAllByGenre(
        genre != null ? genre.toUpperCase() : null,
        limit,
        offset
    );

    long total = gameRepository.countByGenre(genre != null ? genre.toUpperCase() : null);

    Page<GameEntity> gamePage = new PageImpl<>(games, pageable, total);

    return gamePage.map(gameMapper::toDto);
}

    public GameResponseDto getById(Long id) {
        Optional<GameEntity> game = gameRepository.findById(id);
        if(game.isEmpty()) throw new ResponseStatusException(HttpStatus.NOT_FOUND,"Jogo não encontrado");
        return gameMapper.toDto(game.get());
    }

    public List<GameGenreResponse> gameGenre() {
        return gameRepository.findAll().stream().map(gameMapper::toGenres).distinct().toList();
    }

}