INSERT INTO artisans (nom, note, ville, a_propos, email, site_web, top, id_specialite) VALUES
-- ALIMENTATION
('Boucherie Dumond', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet...', 'boucherie.dumond@gmail.com', NULL, 0, 12),
('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet...', 'aupainchaud@hotmail.com', NULL, 1, 13),
('Chocolaterie L.', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet...', 'chocolaterie-l@gmail.com', 'https://chocolat-l.fr', 1, 14),
('Traiteur Truch', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet...', 'contact@truch.com', 'https://trucho.fr', 0, 15),

-- BÂTIMENT
('Orville Salmor', 5.0, 'Evian', 'Lorem ipsum dolor sit amet...', 'o-salmons@live.com', NULL, 1, 4),
('Mont Blanc Elec', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet...', 'contact@mont-blanc.com', 'https://mont-blanc.fr', 0, 2),
('Boutot & fils', 4.7, 'Bourg-en-Bresse', 'Lorem ipsum dolor sit amet...', 'boutot-menuiserie@gmail.com', 'https://boutot.fr', 0, 1),
('Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet...', 'v.bellemare@gmail.com', 'https://plomberie-v.fr', 0, 3),

-- FABRICATION
('Claude Quinn', 4.2, 'Aix-les-Bains', 'Lorem ipsum dolor sit amet...', 'claude.quinn@gmail.com', NULL, 0, 9),
('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet...', 'a.amitee@hotmail.com', 'https://lecuyer.fr', 0, 10),
('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet...', 'e-carignan@hotmail.com', NULL, 0, 11),

-- SERVICES
('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet...', 'r.charbonneau@gmail.com', NULL, 0, 5),
('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet...', 'l.dennos@hotmail.com', 'https://coiffeur-l.fr', 0, 5),
('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet...', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 5),
('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet...', 'contact@le-monde.fr', 'https://le-monde-fleurs.fr', 0, 6),
('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet...', 'v-laderoute@gmail.com', NULL, 0, 7),
('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet...', 'contact@cm-graphisme.fr', 'https://cm-graphisme.fr', 0, 8);


INSERT INTO specialite (nom_specialite, id_categorie) VALUES 
-- Spécialités Bâtiment (ID 1 à 4)
('Menuisier', 1),    -- Sera id_specialite 1
('Electricien', 1),  -- Sera id_specialite 2
('Plombier', 1),     -- Sera id_specialite 3
('Chauffagiste', 1), -- Sera id_specialite 4

-- Spécialités Services (ID 5 à 8)
('Coiffeur', 2),     -- Sera id_specialite 5
('Fleuriste', 2),    -- Sera id_specialite 6
('Toiletteur', 2),   -- Sera id_specialite 7
('Webdesign', 2),    -- Sera id_specialite 8

-- Spécialités Fabrication (ID 9 à 11)
('Bijoutier', 3),    -- Sera id_specialite 9
('Couturier', 3),    -- Sera id_specialite 10
('Ferronier', 3),    -- Sera id_specialite 11

-- Spécialités Alimentation (ID 12 à 15)
('Boucher', 4),      -- Sera id_specialite 12
('Boulanger', 4),    -- Sera id_specialite 13
('Chocolatier', 4),  -- Sera id_specialite 14
('Traiteur', 4);     -- Sera id_specialite 15


INSERT INTO categorie (nom_categorie) VALUES 
('Bâtiment'),    -- Sera id_categorie 1
('Services'),    -- Sera id_categorie 2
('Fabrication'), -- Sera id_categorie 3
('Alimentation');-- Sera id_categorie 4
