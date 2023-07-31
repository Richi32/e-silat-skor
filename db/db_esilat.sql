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

 Date: 31/07/2023 08:38:19
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of arena
-- ----------------------------
BEGIN;
INSERT INTO `arena` (`id`, `arena`) VALUES (1, 'arena sabung 1');
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
  `tim_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of atlit
-- ----------------------------
BEGIN;
INSERT INTO `atlit` (`id`, `nama`, `kontingen`, `kelas`, `kategori`, `jk`, `tim_id`) VALUES (1, 'richi', ' jawa tengah', '16 kg', 'seni', 'laki-laki', 1);
INSERT INTO `atlit` (`id`, `nama`, `kontingen`, `kelas`, `kategori`, `jk`, `tim_id`) VALUES (2, 'seftian', ' jawa timur', '16 kg', 'seni', 'laki-laki', 2);
COMMIT;

-- ----------------------------
-- Table structure for hasil_vote
-- ----------------------------
DROP TABLE IF EXISTS `hasil_vote`;
CREATE TABLE `hasil_vote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `vote` varchar(255) DEFAULT NULL,
  `waktu_vote` datetime DEFAULT NULL,
  `vote_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of hasil_vote
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for nilai
-- ----------------------------
DROP TABLE IF EXISTS `nilai`;
CREATE TABLE `nilai` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `jenis` varchar(255) DEFAULT NULL,
  `nilai` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of nilai
-- ----------------------------
BEGIN;
INSERT INTO `nilai` (`id`, `jenis`, `nilai`) VALUES (1, 'pukulan', 1);
INSERT INTO `nilai` (`id`, `jenis`, `nilai`) VALUES (2, 'tendangan', 2);
INSERT INTO `nilai` (`id`, `jenis`, `nilai`) VALUES (3, 'jatuhan', 3);
INSERT INTO `nilai` (`id`, `jenis`, `nilai`) VALUES (4, 'peringatan', 5);
INSERT INTO `nilai` (`id`, `jenis`, `nilai`) VALUES (5, 'teguran', 1);
INSERT INTO `nilai` (`id`, `jenis`, `nilai`) VALUES (6, 'binaan', 1);
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of partai
-- ----------------------------
BEGIN;
INSERT INTO `partai` (`id`, `partai`, `tim_merah_id`, `tim_biru_id`, `pertandingan`, `tgl_pelaksanaan`) VALUES (1, 'kejurda', 1, 2, 'sabung', '2023-07-17');
COMMIT;

-- ----------------------------
-- Table structure for penilaian
-- ----------------------------
DROP TABLE IF EXISTS `penilaian`;
CREATE TABLE `penilaian` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ronde_id` int(11) DEFAULT NULL,
  `users_id` int(11) DEFAULT NULL,
  `atlit_id` int(11) DEFAULT NULL,
  `nilai_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of penilaian
-- ----------------------------
BEGIN;
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (46, 1, 3, 1, 1);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (47, 1, 3, 1, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (48, 1, 3, 1, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (49, 1, 3, 1, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (52, 1, 3, 2, 1);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (53, 1, 3, 2, 1);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (54, 1, 3, 2, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (55, 1, 3, 2, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (56, 1, 3, 2, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (57, 1, 3, 2, 2);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (59, 1, 3, 1, 1);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (72, 1, 2, 1, 6);
INSERT INTO `penilaian` (`id`, `ronde_id`, `users_id`, `atlit_id`, `nilai_id`) VALUES (73, 1, 2, 1, 6);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of ronde
-- ----------------------------
BEGIN;
INSERT INTO `ronde` (`id`, `partai_id`, `arena_id`, `ronde`, `status_ronde`, `waktu_pertandingan`, `sisa_waktu`) VALUES (1, 1, 1, '1', 'aktif', 120, 0);
INSERT INTO `ronde` (`id`, `partai_id`, `arena_id`, `ronde`, `status_ronde`, `waktu_pertandingan`, `sisa_waktu`) VALUES (2, 1, 1, '2', 'nonaktif', 120, 0);
INSERT INTO `ronde` (`id`, `partai_id`, `arena_id`, `ronde`, `status_ronde`, `waktu_pertandingan`, `sisa_waktu`) VALUES (3, 1, 1, '3', 'nonaktif', 120, 0);
COMMIT;

-- ----------------------------
-- Table structure for tim
-- ----------------------------
DROP TABLE IF EXISTS `tim`;
CREATE TABLE `tim` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tim` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of tim
-- ----------------------------
BEGIN;
INSERT INTO `tim` (`id`, `tim`) VALUES (1, 'merah');
INSERT INTO `tim` (`id`, `tim`) VALUES (2, 'biru');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (1, 'operator@esilat.com', 'OPERATOR', '5f4dcc3b5aa765d61d8327deb882cf99', 'operator');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (2, 'dewanjuri@esilat.com', 'KETUA PERTANDINGAN', '5f4dcc3b5aa765d61d8327deb882cf99', 'dewan_juri');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (3, 'juri1@esilat.com', 'JURI 1', '5f4dcc3b5aa765d61d8327deb882cf99', 'juri_1');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (4, 'juri2@esilat.com', 'JURI 2', '5f4dcc3b5aa765d61d8327deb882cf99', 'juri_2');
INSERT INTO `users` (`id`, `username`, `nama`, `password`, `role`) VALUES (5, 'juri3@esilat.com', 'JURI 3', '5f4dcc3b5aa765d61d8327deb882cf99', 'juri_3');
COMMIT;

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote` (
  `id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `ronde_id` int(11) DEFAULT NULL,
  `nilai_id` int(11) DEFAULT NULL,
  `waktu_vote` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of vote
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
