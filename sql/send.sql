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

 Date: 08/03/2024 01:17:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for send
-- ----------------------------
DROP TABLE IF EXISTS `send`;
CREATE TABLE `send`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `sendTo` varchar(255)  NULL DEFAULT NULL,
  `content` varchar(4096)  NULL DEFAULT NULL,
  `title` varchar(255)  NULL DEFAULT NULL,
  `type` int NULL DEFAULT NULL,
  `ip` varchar(255)  NULL DEFAULT NULL,
  `time` datetime NULL DEFAULT NULL,
  `success` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci COMMENT = '0 发送短信\r\n1 发送邮箱验证码\r\n2 自定义发送邮箱' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
