SET FOREIGN_KEY_CHECKS = 0;
SET AUTOCOMMIT = 0;
-- -----------------------------------------------------
-- Schema osu_ft_offers
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `osu_ft_offers` DEFAULT CHARACTER SET utf8;
USE `osu_ft_offers`;
-- -----------------------------------------------------
-- Table `osu_ft_offers`.`OfferSources`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `osu_ft_offers`.`OfferSources`;
CREATE TABLE IF NOT EXISTS `osu_ft_offers`.`OfferSources` (
    `idOfferSource` INT NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(45) NOT NULL UNIQUE,
    PRIMARY KEY (`idOfferSource`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `osu_ft_offers`.`OfficeLocations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `osu_ft_offers`.`OfficeLocations`;
CREATE TABLE IF NOT EXISTS `osu_ft_offers`.`OfficeLocations` (
    `idOfficeLocation` INT NOT NULL AUTO_INCREMENT,
    `location` VARCHAR(2) NOT NULL UNIQUE,
    `fullName` VARCHAR(45) NOT NULL UNIQUE,
    PRIMARY KEY (`idOfficeLocation`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `osu_ft_offers`.`WorkArrangement`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `osu_ft_offers`.`WorkArrangements`;
CREATE TABLE IF NOT EXISTS `osu_ft_offers`.`WorkArrangements` (
    `idWorkArrangement` INT NOT NULL AUTO_INCREMENT,
    `arrangement` VARCHAR(45) NOT NULL UNIQUE DEFAULT 'On-site',
    PRIMARY KEY (`idWorkArrangement`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `osu_ft_offers`.`PriorExperiences`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `osu_ft_offers`.`PriorExperiences`;
CREATE TABLE IF NOT EXISTS `osu_ft_offers`.`PriorExperiences` (
    `idPriorExperience` INT NOT NULL AUTO_INCREMENT,
    `experienceType` VARCHAR(45) NOT NULL UNIQUE,
    PRIMARY KEY (`idPriorExperience`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `osu_ft_offers`.`PreviousDegrees`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `osu_ft_offers`.`PreviousDegrees`;
CREATE TABLE IF NOT EXISTS `osu_ft_offers`.`PreviousDegrees` (
    `idPreviousDegree` INT NOT NULL AUTO_INCREMENT,
    `degreeType` VARCHAR(45) NOT NULL UNIQUE DEFAULT 'Non-STEM',
    PRIMARY KEY (`idPreviousDegree`)
) ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `osu_ft_offers`.`Offers`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `osu_ft_offers`.`Offers`;
CREATE TABLE IF NOT EXISTS `osu_ft_offers`.`Offers` (
    `idOffer` INT NOT NULL AUTO_INCREMENT,
    `userName` VARCHAR(45) NOT NULL,
    `offerDate` DATE NOT NULL,
    `personalProject` TINYINT NOT NULL DEFAULT 0,
    `returnship` TINYINT NOT NULL DEFAULT 0,
    `timeInProgram` DECIMAL(4, 3) NULL,
    `salary` INT NULL,
    `gpa` DECIMAL(3, 2) NULL,
    `swePosition` TINYINT NOT NULL DEFAULT 1,
    `bigTechOffer` TINYINT NOT NULL DEFAULT 0,
    `ageOfCandidate` INT NULL,
    `idOfferSource` INT NULL,
    `idOfficeLocation` INT NULL,
    `idWorkArrangement` INT NULL DEFAULT 1,
    `idPriorExperience` INT NULL,
    `idPreviousDegree` INT NULL,
    PRIMARY KEY (`idOffer`),
    FOREIGN KEY (`idOfferSource`) REFERENCES `osu_ft_offers`.`OfferSources` (`idOfferSource`) ON DELETE
    SET NULL,
        FOREIGN KEY (`idOfficeLocation`) REFERENCES `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`) ON DELETE
    SET NULL,
        FOREIGN KEY (`idWorkArrangement`) REFERENCES `osu_ft_offers`.`WorkArrangements` (`idWorkArrangement`) ON DELETE
    SET NULL,
        FOREIGN KEY (`idPriorExperience`) REFERENCES `osu_ft_offers`.`PriorExperiences` (`idPriorExperience`) ON DELETE
    SET NULL,
        FOREIGN KEY (`idPreviousDegree`) REFERENCES `osu_ft_offers`.`PreviousDegrees` (`idPreviousDegree`) ON DELETE
    SET NULL
) ENGINE = InnoDB;
SET FOREIGN_KEY_CHECKS = 1;
COMMIT;