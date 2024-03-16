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

 Date: 16/03/2024 16:27:09
*/

SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `username` varchar(20) NOT NULL COMMENT '用户名',
  `password` varchar(32) NULL DEFAULT NULL COMMENT '密码',
  `nickname` varchar(10) NULL DEFAULT '' COMMENT '昵称',
  `email` varchar(128) NULL DEFAULT '' COMMENT '邮箱',
  `user_pic` varchar(128) NULL DEFAULT '' COMMENT '头像',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '修改时间',
  `salt` varchar(32) NOT NULL,
  `organization` varchar(32) NULL DEFAULT NULL,
  `phone` varchar(32) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username` ASC) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 18 COMMENT = '用户表' ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (4, 'Lu Lan', 'F25fdAoKV9', '上野大和', 'lan10@icloud.com', 'http://v48qG80L00ocU0uc3b5d-wDq3KgzUjYtQrC03az9g', '2004-03-30 13:44:13', '2001-11-21 08:32:13', '', NULL, NULL);
INSERT INTO `user` VALUES (5, 'Theodore Snyder', 'HERrnsUTCy', '贾子韬', 'snyderth@outlook.com', 'http://gShus1BclqBi3463Vt3V-Uz24ygPrty5YTd319c7b', '2015-10-23 02:12:41', '2017-10-01 19:08:04', '', NULL, NULL);
INSERT INTO `user` VALUES (6, 'Cheng Jiehong', 'TJRujW0krD', '太田美羽', 'jche@hotmail.com', 'http://78f9Yb0h9keIZPDVDGLj-2KeD5YDXlpkfwP7E7enW', '2006-07-02 21:44:21', '2007-08-22 03:19:37', '', NULL, NULL);
INSERT INTO `user` VALUES (7, 'Ti Wing Fat', 'lqRgMwVxmd', '邵杰宏', 'tiwi@gmail.com', 'http://CPtU2JvWKwKLFBHvvpHa-IOOtLpBR7ZsSCkMSFcEi', '2005-06-26 04:31:28', '2020-03-14 09:11:25', '', NULL, NULL);
INSERT INTO `user` VALUES (8, 'Liao Ziyi', 'VCHugleLG1', '佐々木翼', 'ziyli4@outlook.com', 'http://2EUMGhLExVwBGIlTJGKR-2aBZ81ryanhGVAZ1Uegp', '2000-04-03 21:06:07', '2019-06-08 04:13:24', '', NULL, NULL);
INSERT INTO `user` VALUES (9, 'Douglas Gordon', 'UHZx2H2MjT', '呂俊宇', 'godoug330@hotmail.com', 'http://PKy9CfrNhrK6SZ5ZhWSd-DyTMUpUd390BeVocOABc', '2017-05-27 04:16:05', '2018-07-20 13:30:32', '', NULL, NULL);
INSERT INTO `user` VALUES (10, 'Cui Xiuying', 'A1rnHl1XRb', '麥世榮', 'cuixi17@mail.com', 'http://GjW6Jzj6bxm8d5ZlzXxm-Df17vMianq0hryXv9Jqe', '2019-12-08 19:04:48', '2020-03-21 22:15:59', '', NULL, NULL);
INSERT INTO `user` VALUES (11, 'Christine Russell', 'e4tHWpI4x4', '原田美緒', 'christinerussell@icloud.com', 'http://P21jro7l5Xh0tzLM369b-dwYZPQqs2oEzz41lzkwR', '2014-04-13 01:01:37', '2022-08-19 06:37:47', '', NULL, NULL);
INSERT INTO `user` VALUES (12, 'Arai Hazuki', 'aSY2ivqVUl', '谭璐', 'araihazuki@mail.com', 'http://NcAyRK23yHcnNmfgaKKS-a6hqS8KbFrXWS01tAOxd', '2016-11-26 09:30:50', '2021-03-26 20:39:22', '', NULL, NULL);
INSERT INTO `user` VALUES (13, 'Lucille Boyd', 'PG5xHUgFLv', '高田花', 'lucilleboy@yahoo.com', 'http://vTRRSuHRQpJuFaXnDvIx-Lks5A8zZBa0fM961SU6o', '2015-09-10 08:50:44', '2002-12-02 03:10:57', '', NULL, NULL);
INSERT INTO `user` VALUES (14, '阿夜', 'a0e2a5dcf2c1045ab6fa855c72cee35d', '', '', '', '2024-03-05 08:50:58', '2024-03-05 08:50:58', 'yus4hbga', NULL, NULL);
INSERT INTO `user` VALUES (15, '阿夜666', '89c8e1fd4171620c8cd7dd01910c85a7', '', '', '', '2024-03-05 10:56:35', '2024-03-05 10:56:35', 'i7aowl4l', '四川职业技术学院', '18211778981');
INSERT INTO `user` VALUES (16, '阿夜520', '47ec287f4e9cc4ee75303ba246b41ab8', '', '', '', '2024-03-05 11:43:36', '2024-03-05 11:43:36', 'dewdeg2n', 'Option2', '18281778900');
INSERT INTO `user` VALUES (17, '阿夜123', 'bb18a811620687e7931676087db41985', '', '', '', '2024-03-05 20:29:30', '2024-03-05 20:29:30', '0brznsgw', 'Option2', '18281778980');

SET FOREIGN_KEY_CHECKS = 1;
