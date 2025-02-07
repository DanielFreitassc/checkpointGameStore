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

    private final String description;

    GameGenre(String description) {
        this.description = description;
    }

    public String getDescription() { 
        return description;
    }
    
}
