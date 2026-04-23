-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mer. 15 avr. 2026 à 12:38
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

-- --------------------------------------------------------

--
-- Structure de la table `artisans`
--

CREATE TABLE `artisans` (
  `id_artisan` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `note` decimal(2,1) DEFAULT NULL,
  `ville` varchar(100) DEFAULT NULL,
  `a_propos` text DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `site_web` varchar(100) DEFAULT NULL,
  `top` tinyint(1) DEFAULT 0,
  `id_specialite` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `artisans`
--

INSERT INTO `artisans` (`id_artisan`, `nom`, `note`, `ville`, `a_propos`, `email`, `site_web`, `top`, `id_specialite`) VALUES
(1, 'Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'boucherie.dumond@gmail.com', '', 0, 1),
(2, 'Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'aupainchaud@hotmail.com', '', 1, 2),
(3, 'Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1, 3),
(4, 'Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0, 4),
(5, 'Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'o-salmons@live.com', '', 1, 5),
(6, 'Mont Blanc Électricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0, 6),
(7, 'Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0, 7),
(8, 'Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0, 8),
(9, 'Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'claude.quinn@gmail.com', '', 0, 9),
(10, 'Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0, 10),
(11, 'Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'e-carignan@hotmail.com', '', 0, 11),
(12, 'Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'r.charbonneau@gmail.com', '', 0, 12),
(13, 'Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'l.dennos@hotmail.com', 'https://coiffure-leala-chambery.fr', 0, 12),
(14, 'C\'est sup\'hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0, 12),
(15, 'Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0, 13),
(16, 'Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'v-laderoute@gmail.com', '', 0, 14),
(17, 'CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0, 15);

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id_categorie` int(11) NOT NULL,
  `nom_categorie` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id_categorie`, `nom_categorie`) VALUES
(1, 'Alimentation'),
(2, 'Bâtiment'),
(3, 'Fabrication'),
(4, 'Services');

-- --------------------------------------------------------

--
-- Structure de la table `specialites`
--

CREATE TABLE `specialites` (
  `id_specialite` int(11) NOT NULL,
  `nom_specialite` varchar(100) NOT NULL,
  `id_categorie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `specialites`
--

INSERT INTO `specialites` (`id_specialite`, `nom_specialite`, `id_categorie`) VALUES
(1, 'Boucher', 1),
(2, 'Boulanger', 1),
(3, 'Chocolatier', 1),
(4, 'Traiteur', 1),
(5, 'Chauffagiste', 2),
(6, 'Electricien', 2),
(7, 'Menuisier', 2),
(8, 'Plombier', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Coiffeur', 4),
(13, 'Coiffeur', 4),
(14, 'Coiffeur', 4),
(15, 'Fleuriste', 4),
(16, 'Toiletteur', 4),
(17, 'Webdesign', 4);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `artisans`
--
ALTER TABLE `artisans`
  ADD PRIMARY KEY (`id_artisan`),
  ADD KEY `artisans_ibfk_1` (`id_specialite`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_categorie`);

--
-- Index pour la table `specialites`
--
ALTER TABLE `specialites`
  ADD PRIMARY KEY (`id_specialite`),
  ADD KEY `id_categorie` (`id_categorie`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `artisans`
--
ALTER TABLE `artisans`
  MODIFY `id_artisan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_categorie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `specialites`
--
ALTER TABLE `specialites`
  MODIFY `id_specialite` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `artisans`
--
ALTER TABLE `artisans`
  ADD CONSTRAINT `artisans_ibfk_1` FOREIGN KEY (`id_specialite`) REFERENCES `specialites` (`id_specialite`);

--
-- Contraintes pour la table `specialites`
--
ALTER TABLE `specialites`
  ADD CONSTRAINT `specialites_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id_categorie`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
