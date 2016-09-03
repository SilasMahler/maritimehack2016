CREATE TABLE `uf_vessel` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `length` float DEFAULT NULL,
  `beam` float DEFAULT NULL,
  `manager` varchar(255) DEFAULT NULL,
  `owner` varchar(255) DEFAULT NULL,
  `insurer` varchar(255) DEFAULT NULL,
  `eng_builder` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

ALTER TABLE `uf_vessel` ADD (
  `imo` integer DEFAULT NULL,
  `callsign` varchar(20) DEFAULT NULL,
  `mmsi` integer DEFAULT NULL
);