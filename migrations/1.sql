CREATE TABLE `web_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `mobilenumber` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NULL,
  `password` VARCHAR(100) NULL,
  `deleted` TINYINT(11) NULL DEFAULT 0,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));


