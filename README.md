## API: Loja de Jogos 

### **1. Rota: Obter jogos com paginação**

#### Endpoint
`GET /games?page={page}&size={size}`

#### Parâmetros
- `page`: Número da página (começando de 0).
- `size`: Número de jogos por página.

#### Exemplo de Requisição
`GET /games?page=0&size=2`

#### Exemplo de Resposta
```json
{
    "content": [
        {
            "id": 1,
            "name": "God of War",
            "description": "Acompanhando Kratos e seu filho Atreus em uma jornada cheia de ação, mitologia e emoção.",
            "image": "https://img.hype.games/cdn/209a330a-50f4-48d1-9db7-7485e6a81d87cover.jpg",
            "genre": "ACTION",
            "price": 249.90
        },
        {
            "id": 2,
            "name": "The Witcher 3: Wild Hunt",
            "description": "Aventuras de Geralt de Rivia enquanto ele busca por sua filha adotiva em um mundo vasto e perigoso.",
            "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg?t=1736424367",
            "genre": "RPG",
            "price": 149.90
        }
    ],
    "pageable": {
        "pageNumber": 0,
        "pageSize": 2,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalPages": 24,
    "totalElements": 48,
    "size": 2,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 2,
    "empty": false
}
```

---

### **2. Rota: Obter jogos filtrados por gênero**

#### Endpoint
`GET /games?page={page}&size={size}&genre={genre}`

#### Parâmetros
- `genre`: Filtro de gênero dos jogos.

#### Exemplo de Requisição
`GET /games?page=0&size=2&genre=ACTION`

#### Exemplo de Resposta
```json
{
    "content": [
        {
            "id": 1,
            "name": "God of War",
            "description": "Acompanhando Kratos e seu filho Atreus em uma jornada cheia de ação, mitologia e emoção.",
            "image": "https://img.hype.games/cdn/209a330a-50f4-48d1-9db7-7485e6a81d87cover.jpg",
            "genre": "ACTION",
            "price": 249.90
        },
        {
            "id": 24,
            "name": "Monster Hunter: World",
            "description": "Caça monstros gigantes em um mundo vasto, com batalhas e itens para melhorar seu personagem.",
            "image": "https://miro.medium.com/v2/resize:fit:1400/0*UwFQm_E8NFcRyrmC.png",
            "genre": "ACTION",
            "price": 249.90
        }
    ],
    "pageable": {
        "pageNumber": 0,
        "pageSize": 2,
        "sort": {
            "empty": true,
            "sorted": false,
            "unsorted": true
        },
        "offset": 0,
        "paged": true,
        "unpaged": false
    },
    "last": false,
    "totalPages": 4,
    "totalElements": 7,
    "size": 2,
    "number": 0,
    "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
    },
    "first": true,
    "numberOfElements": 2,
    "empty": false
}
```

---

### **3. Rota: Obter detalhes de um jogo específico**

#### Endpoint
`GET /games/{id}`

#### Exemplo de Requisição
`GET /games/29`

#### Exemplo de Resposta
```json
{
    "id": 29,
    "name": "Star Wars Jedi: Fallen Order",
    "description": "Jogo de ação e aventura em Star Wars, onde você assume o papel de um Jedi em treinamento.",
    "image": "https://i.ytimg.com/vi/TtyoXez8ncU/maxresdefault.jpg",
    "genre": "ACTION",
    "price": 199.90
}
```

---

### **4. Rota: Obter gêneros disponíveis**

#### Endpoint
`GET /games/genres`

#### Exemplo de Requisição
`GET /games/genres`

#### Exemplo de Resposta (abreviado)
```json
[
  {"genre": "ADVENTURE"},
  {"genre": "ACTION"},
  {"genre": "RPG"},
  {"genre": "SIMULATION"},
  {"genre": "SPORTS"},
  {"genre": "PARTY"},
  {"genre": "SHOOTER"},
  {"genre": "RACING"},
  {"genre": "HORROR"},
  {"genre": "FIGHTING"},
  {"genre": "METROIDVANIA"},
  {"genre": "MOBA"},
  {"genre": "PLATFORMER"},
  {"genre": "STRATEGY"}
]
```

---

### **Resumo das Rotas**

- `GET /games?page={page}&size={size}`: Retorna jogos com paginação.
- `GET /games?page={page}&size={size}&genre={genre}`: Retorna jogos filtrados por gênero.
- `GET /games/{id}`: Retorna detalhes de um jogo específico.
- `GET /games/genres`: Retorna lista de gêneros disponíveis.

