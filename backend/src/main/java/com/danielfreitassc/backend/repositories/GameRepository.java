package com.danielfreitassc.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.danielfreitassc.backend.models.GameEntity;

public interface GameRepository extends JpaRepository<GameEntity,Long> {

    @Query(nativeQuery = true, value = """
        SELECT * FROM games 
        WHERE (:genre IS NULL OR :genre = '' OR genre = CAST(:genre AS game_genre))
        ORDER BY id
        LIMIT :limit OFFSET :offset
    """)
    List<GameEntity> findAllByGenre( 
        @Param("genre") String genre,
        @Param("limit") int limit,
        @Param("offset") int offset
    );

    @Query(nativeQuery = true, value = """
        SELECT COUNT(*) FROM games 
        WHERE (:genre IS NULL OR :genre = '' OR genre = CAST(:genre AS game_genre))
    """)
    long countByGenre(@Param("genre") String genre);
    
}
