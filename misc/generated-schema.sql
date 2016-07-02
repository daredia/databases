-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'messages'
-- 
-- ---

DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `user` INTEGER NULL DEFAULT NULL,
  `room` INTEGER NULL DEFAULT NULL,
  `text` TEXT NULL DEFAULT NULL,
  `createdAt` DATETIME,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(100) NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'room'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `roomname` VARCHAR(100) NULL DEFAULT 'lobby',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (room) REFERENCES `rooms` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `messages` (`id`,`user`,`room`,`text`,`createdAt`) VALUES
-- ('','','','','');
-- INSERT INTO `users` (`id`,`username`) VALUES
-- ('','');
-- INSERT INTO `room` (`id`,`roomname`) VALUES
-- ('','');