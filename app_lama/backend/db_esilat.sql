/*
 Navicat Premium Data Transfer

 Source Server         : mariakonek
 Source Server Type    : MariaDB
 Source Server Version : 110002 (11.0.2-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : db_esilat

 Target Server Type    : MariaDB
 Target Server Version : 110002 (11.0.2-MariaDB)
 File Encoding         : 65001

 Date: 09/07/2023 02:48:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for arena
-- ----------------------------
DROP TABLE IF EXISTS `arena`;
CREATE TABLE `arena` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `arena` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of arena
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for atlit
-- ----------------------------
DROP TABLE IF EXISTS `atlit`;
CREATE TABLE `atlit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `kontingen` varchar(255) DEFAULT NULL,
  `kelas` varchar(255) DEFAULT NULL,
  `kategori` varchar(255) DEFAULT NULL,
  `jk` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of atlit
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for hukuman
-- ----------------------------
DROP TABLE IF EXISTS `hukuman`;
CREATE TABLE `hukuman` (
  `id` int(11) DEFAULT NULL,
  `ronde_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `tim_id` int(11) DEFAULT NULL,
  `hukuman` varchar(255) DEFAULT NULL,
  `waktu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of hukuman
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for partai
-- ----------------------------
DROP TABLE IF EXISTS `partai`;
CREATE TABLE `partai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partai` varchar(255) DEFAULT NULL,
  `tim_merah_id` int(11) DEFAULT NULL,
  `tim_biru_id` int(11) DEFAULT NULL,
  `pertandingan` varchar(255) DEFAULT NULL,
  `tgl_pelaksanaan` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of partai
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for penilaian
-- ----------------------------
DROP TABLE IF EXISTS `penilaian`;
CREATE TABLE `penilaian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ronde_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `tim_id` int(11) DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  `jenis_nilai` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of penilaian
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for ronde
-- ----------------------------
DROP TABLE IF EXISTS `ronde`;
CREATE TABLE `ronde` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partai_id` int(11) DEFAULT NULL,
  `arena_id` int(11) DEFAULT NULL,
  `ronde` varchar(255) DEFAULT NULL,
  `status_ronde` varchar(255) DEFAULT NULL,
  `waktu_pertandingan` int(11) DEFAULT NULL,
  `sisa_waktu` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of ronde
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tim
-- ----------------------------
DROP TABLE IF EXISTS `tim`;
CREATE TABLE `tim` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tim` varchar(255) DEFAULT NULL,
  `atlit_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of tim
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (1, 'bahtiar', 'bahtiar halo', '5f4dcc3b5aa765d61d8327deb882cf99', 'operator');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (2, 'rizal', 'rizal nur', '5f4dcc3b5aa765d61d8327deb882cf99', 'dewan_juri');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (3, 'rici', 'rici septa', '5f4dcc3b5aa765d61d8327deb882cf99', 'juri_1');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (4, 'ambon', 'ambon bro', '5f4dcc3b5aa765d61d8327deb882cf99', 'juri_2');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (5, 'septa', 'septa al', '5f4dcc3b5aa765d61d8327deb882cf99', 'juri_3');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (7, 'seftian', 'seftian andy', '1234', 'pelatih');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (8, 'kamis', 'kemis', '1234', 'pelatih_2');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
