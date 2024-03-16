/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80036 (8.0.36)
 Source Host           : localhost:3306
 Source Schema         : netsafe

 Target Server Type    : MySQL
 Target Server Version : 80036 (8.0.36)
 File Encoding         : 65001

 Date: 16/03/2024 16:24:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `group_name` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `create_time` datetime NOT NULL,
  `change_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES (1, '阿夜小分队', '2024-03-15 17:19:29', '2024-03-15 21:42:53');
INSERT INTO `company` VALUES (4, '阿丽大分队', '2011-11-22 12:51:52', '2015-09-07 16:53:03');
INSERT INTO `company` VALUES (5, '爱德华分队', '2000-12-09 21:28:29', '2003-07-25 18:25:02');
INSERT INTO `company` VALUES (6, '小丽队', '2008-06-14 02:23:58', '2003-11-22 23:15:04');
INSERT INTO `company` VALUES (7, '小粟队', '2009-06-27 19:43:55', '2007-03-29 09:04:52');
INSERT INTO `company` VALUES (8, '小明队', '2011-02-10 04:11:14', '2012-05-13 07:25:25');
INSERT INTO `company` VALUES (9, '小朋友小分队', '2024-03-15 22:03:09', '2024-03-15 22:08:59');
INSERT INTO `company` VALUES (10, '我爱你组织', '2024-03-15 22:07:09', '2024-03-15 22:07:09');
INSERT INTO `company` VALUES (11, '小小粟队', '2024-03-15 22:09:20', '2024-03-15 22:09:20');

SET FOREIGN_KEY_CHECKS = 1;
