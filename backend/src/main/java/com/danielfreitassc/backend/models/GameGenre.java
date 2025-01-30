package com.danielfreitassc.backend.models;

public enum GameGenre {
    ACTION("Ação"),
    ADVENTURE("Aventura"),
    RPG("RPG"),
    STRATEGY("Estratégia"),
    SPORTS("Esportes"),
    PUZZLE("Quebra-cabeça"),
    SHOOTER("Atirador"),
    FIGHTING("Luta"),
    RACING("Corrida"),
    SIMULATION("Simulação"),
    HORROR("Terror"),
    PLATFORMER("Plataforma"),
    SURVIVAL("Sobrevivência"),
    MOBA("MOBA"),
    MMORPG("MMORPG"),
    CARD("Cartas"),
    MUSIC("Música"),
    PARTY("Festa"),
    METROIDVANIA("Metroidvania");

    private final String genre;

    GameGenre(String genre) {
        this.genre = genre;
    }

    public String getDescricao() {
        return genre;
    }
}
