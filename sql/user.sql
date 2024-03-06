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

 Date: 05/03/2024 23:27:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(20)  NOT NULL COMMENT '用户名',
  `password` varchar(32)  NULL DEFAULT NULL COMMENT '密码',
  `nickname` varchar(10)  NULL DEFAULT '' COMMENT '昵称',
  `email` varchar(128)  NULL DEFAULT '' COMMENT '邮箱',
  `user_pic` varchar(128)  NULL DEFAULT '' COMMENT '头像',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '修改时间',
  `salt` varchar(32)  NOT NULL,
  `organization` varchar(32)  NULL DEFAULT NULL,
  `phone` varchar(32)  NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18  COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

SET FOREIGN_KEY_CHECKS = 1;
