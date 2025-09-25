# Section 9: Database Schema

For the MVP version of River Raid JS, no database is required as the game runs entirely client-side. However, the game will use browser localStorage for minimal persistence.

### LocalStorage Schema

```javascript
// High Score Storage
{
  "riverraid_highscore": {
    "score": 12500,
    "timestamp": "2025-09-25T10:30:00Z",
    "gameVersion": "1.0.0"
  }
}

// Game Settings (Future)
{
  "riverraid_settings": {
    "soundEnabled": true,
    "musicEnabled": true,
    "touchControlsPosition": "left" // or "right"
  }
}
```

### Future Database Considerations

If backend services are added for leaderboards or user accounts, here's a proposed schema:

```sql
-- PostgreSQL schema for future implementation

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_played TIMESTAMP
);

-- High scores table
CREATE TABLE high_scores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    score INTEGER NOT NULL,
    game_time INTEGER NOT NULL, -- seconds played
    enemies_destroyed INTEGER DEFAULT 0,
    max_scroll_speed FLOAT DEFAULT 0,
    game_version VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address INET,
    user_agent TEXT
);

-- Gameplay statistics
CREATE TABLE gameplay_stats (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    total_games_played INTEGER DEFAULT 0,
    total_score INTEGER DEFAULT 0,
    total_enemies_destroyed INTEGER DEFAULT 0,
    total_fuel_collected INTEGER DEFAULT 0,
    total_bombs_used INTEGER DEFAULT 0,
    favorite_scroll_direction VARCHAR(20),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_high_scores_score ON high_scores(score DESC);
CREATE INDEX idx_high_scores_created ON high_scores(created_at DESC);
CREATE INDEX idx_high_scores_user ON high_scores(user_id);
```

---
