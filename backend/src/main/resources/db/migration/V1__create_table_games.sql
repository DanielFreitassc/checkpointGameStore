-- Criar o tipo ENUM
CREATE TYPE game_genre AS ENUM (
    'ACTION', 'ADVENTURE', 'RPG', 'STRATEGY', 'SPORTS', 'PUZZLE', 
    'SHOOTER', 'FIGHTING', 'RACING', 'SIMULATION', 'HORROR', 
    'PLATFORMER', 'SURVIVAL', 'MOBA', 'MMORPG', 'CARD', 'MUSIC', 
    'PARTY', 'METROIDVANIA'
);

-- Criar a tabela com o tipo ENUM
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    genre game_genre NOT NULL,
    price DECIMAL(10, 2) NOT NULL
); 
