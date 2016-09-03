-- User can edit his own Display Name
CREATE TABLE `vt_vessel` (
  `imo` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `callsign` varchar(50) DEFAULT NULL,
  `homeport` varchar(200) DEFAULT NULL,
  `build` date DEFAULT NULL,
  `flag` varchar(50) DEFAULT NULL,
  `status` varchar(200) DEFAULT NULL,
  `status_date` date DEFAULT NULL,
  `url` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
