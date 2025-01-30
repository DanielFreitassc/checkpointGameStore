package com.danielfreitassc.backend.controllers;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.danielfreitassc.backend.dtos.GameGenreResponse;
import com.danielfreitassc.backend.dtos.GameResponseDto;
import com.danielfreitassc.backend.services.GameService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/games")
public class GameController {
    private final GameService gameService;

    @GetMapping
    public Page<GameResponseDto> get(Pageable pageable,@RequestParam(value = "genre",required = false) String genre) {
        return gameService.get(pageable,genre);
    }
    
    @GetMapping("/{id}")
    public GameResponseDto getById(@PathVariable Long id) {
        return gameService.getById(id);
    }

    @GetMapping("/genres")
    public List<GameGenreResponse> getGenrest() {
        return gameService.gameGenre();
    }
}
