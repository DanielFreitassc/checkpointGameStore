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
      "name": "The Legend of Zelda: Breath of the Wild",
      "genre": "ADVENTURE",
      "price": 199.99
    },
    {
      "id": 2,
      "name": "God of War",
      "genre": "ACTION",
      "price": 249.90
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 2
  },
  "totalPages": 26,
  "totalElements": 51
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
      "id": 2,
      "name": "God of War",
      "genre": "ACTION",
      "price": 249.90
    },
    {
      "id": 25,
      "name": "Monster Hunter: World",
      "genre": "ACTION",
      "price": 249.90
    }
  ],
  "pageable": {
    "pageNumber": 0,
    "pageSize": 2
  },
  "totalPages": 4,
  "totalElements": 7
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
  "name": "Doom Eternal",
  "genre": "SHOOTER",
  "price": 149.90
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
