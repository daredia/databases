-- CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  /* Describe your table here.*/
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `user` INTEGER NULL DEFAULT NULL,
  `room` VARCHAR(100) NULL DEFAULT 'NULL',
  `text` TEXT NULL DEFAULT NULL,
  -- `createdAt` DATETIME,
  PRIMARY KEY (`id`)
);

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
  `username` VARCHAR(100) NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);

-- DROP TABLE IF EXISTS `rooms`;

-- CREATE TABLE rooms (
--   `id` INTEGER NOT NULL AUTO_INCREMENT DEFAULT NULL,
--   `roomname` VARCHAR(100) NULL DEFAULT 'lobby',
--   PRIMARY KEY (`id`)
-- );


-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `messages` ADD FOREIGN KEY (user) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (room) REFERENCES `rooms` (`id`);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
