-- -----------------------------------------------------
-- Data for table `osu_ft_offers`.`OfferSources`
-- -----------------------------------------------------
START TRANSACTION;
USE `osu_ft_offers`;
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (1, 'Recruiter-Linkedin');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (2, 'LinkedIn');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (3, 'Indeed');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (4, 'Grace Hopper');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (5, 'Facebook');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (6, 'Company Website');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (7, 'Referral');
INSERT IGNORE INTO `osu_ft_offers`.`OfferSources` (`idOfferSource`, `type`)
VALUES (8, 'Job Fair');
COMMIT;
-- -----------------------------------------------------
-- Data for table `osu_ft_offers`.`OfficeLocations`
-- -----------------------------------------------------
START TRANSACTION;
USE `osu_ft_offers`;
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (1, 'AL', 'Alabama');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (2, 'AK', 'Alaska');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (4, 'AZ', 'Arizona');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (5, 'AR', 'Arkansas');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (3, 'AS', 'American Samoa');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (6, 'CA', 'California');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (7, 'CO', 'Colorado');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (8, 'CT', 'Connecticut');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (9, 'DE', 'Delaware');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (10, 'DC', 'District of Columbia');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (11, 'FL', 'Florida');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (12, 'GA', 'Georgia');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (13, 'GU', 'Guam');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (14, 'HI', 'Hawaii');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (15, 'ID', 'Idaho');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (16, 'IL', 'Illinois');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (17, 'IN', 'Indiana');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (18, 'IA', 'Iowa');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (19, 'KS', 'Kansas');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (20, 'KY', 'Kentucky');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (21, 'LA', 'Louisiana');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (22, 'ME', 'Maine');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (23, 'MD', 'Maryland');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (24, 'MA', 'Massachusetts');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (25, 'MI', 'Michigan');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (26, 'MN', 'Minnesota');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (27, 'MS', 'Mississippi');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (28, 'MO', 'Missouri');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (29, 'MT', 'Montana');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (30, 'NE', 'Nebraska');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (31, 'NV', 'Nevada');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (32, 'NH', 'New Hampshire');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (33, 'NJ', 'New Jersey');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (34, 'NM', 'New Mexico');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (35, 'NY', 'New York');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (36, 'NC', 'North Carolina');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (37, 'ND', 'North Dakota');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (38, 'MP', 'Northern Mariana Islands');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (39, 'OH', 'Ohio');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (40, 'OK', 'Oklahoma');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (41, 'OR', 'Oregon');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (42, 'PA', 'Pennsylvania');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (43, 'PR', 'Puerto Rico');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (44, 'RI', 'Rhode Islan');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (45, 'SC', 'South Carolina');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (46, 'SD', 'South Dakota');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (47, 'TN', 'Tennessee');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (48, 'TX', 'Texas');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (50, 'UT', 'Utah');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (51, 'VT', 'Vermont');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (53, 'VA', 'Virginia');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (52, 'VI', 'Virgin Islands');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (54, 'WA', 'Washington');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (55, 'WV', 'West Virginia');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (56, 'WI', 'Wisconsin');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (57, 'WY', 'Wyoming');
INSERT IGNORE INTO `osu_ft_offers`.`OfficeLocations` (`idOfficeLocation`, `location`, `fullName`)
VALUES (49, 'TT', 'Trust Territories');
COMMIT;
-- -----------------------------------------------------
-- Data for table `osu_ft_offers`.`WorkArrangement`
-- -----------------------------------------------------
START TRANSACTION;
USE `osu_ft_offers`;
INSERT IGNORE INTO `osu_ft_offers`.`WorkArrangements` (`idWorkArrangement`, `arrangement`)
VALUES (1, 'On-site');
INSERT IGNORE INTO `osu_ft_offers`.`WorkArrangements` (`idWorkArrangement`, `arrangement`)
VALUES (2, 'Hybrid');
INSERT IGNORE INTO `osu_ft_offers`.`WorkArrangements` (`idWorkArrangement`, `arrangement`)
VALUES (3, 'Remote');
COMMIT;
-- -----------------------------------------------------
-- Data for table `osu_ft_offers`.`PriorExperiences`
-- -----------------------------------------------------
START TRANSACTION;
USE `osu_ft_offers`;
INSERT IGNORE INTO `osu_ft_offers`.`PriorExperiences` (`idPriorExperience`, `experienceType`)
VALUES (1, 'Internship');
INSERT IGNORE INTO `osu_ft_offers`.`PriorExperiences` (`idPriorExperience`, `experienceType`)
VALUES (2, 'Industry Specific');
COMMIT;
-- -----------------------------------------------------
-- Data for table `osu_ft_offers`.`PreviousDegrees`
-- -----------------------------------------------------
START TRANSACTION;
USE `osu_ft_offers`;
INSERT IGNORE INTO `osu_ft_offers`.`PreviousDegrees` (`idPreviousDegree`, `degreeType`)
VALUES (1, 'Non-STEM');
INSERT IGNORE INTO `osu_ft_offers`.`PreviousDegrees` (`idPreviousDegree`, `degreeType`)
VALUES (2, 'STEM');
COMMIT;