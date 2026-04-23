-- 1. Création de la table categorie
CREATE TABLE IF NOT EXISTS categorie (
    id_categorie INT(11) AUTO_INCREMENT PRIMARY KEY,
    nom_categorie VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 2. Création de la table specialite
CREATE TABLE IF NOT EXISTS specialite (
    id_specialite INT(11) AUTO_INCREMENT PRIMARY KEY,
    nom_specialite VARCHAR(100) NOT NULL,
    id_categorie INT(11),
    CONSTRAINT fk_specialite_categorie 
        FOREIGN KEY (id_categorie) 
        REFERENCES categorie(id_categorie) 
        ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- 3. Création de la table artisan
CREATE TABLE IF NOT EXISTS artisan (
    id_artisan INT(11) AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    note DECIMAL(2,1) DEFAULT NULL,
    ville VARCHAR(100) DEFAULT NULL,
    a_propos TEXT DEFAULT NULL,
    email VARCHAR(100) DEFAULT NULL,
    site_web VARCHAR(100) DEFAULT NULL,
    top TINYINT(1) DEFAULT 0,
    id_specialite INT(11) DEFAULT NULL,
    CONSTRAINT fk_artisan_specialite 
        FOREIGN KEY (id_specialite) 
        REFERENCES specialite(id_specialite) 
        ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;