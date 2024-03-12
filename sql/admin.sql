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

 Date: 12/03/2024 23:02:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `adminname` varchar(20)  NOT NULL COMMENT '用户名',
  `password` varchar(32)  NULL DEFAULT NULL COMMENT '密码',
  `email` varchar(128)  NULL DEFAULT '' COMMENT '邮箱',
  `user_pic` varchar(128)  NULL DEFAULT '' COMMENT '头像',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '修改时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `adminname`(`adminname` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4  COMMENT = '管理员表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'admin', '123', '2997036064@qq.com', '', '2024-03-12 20:15:47', '2024-03-12 20:15:50');

SET FOREIGN_KEY_CHECKS = 1;
