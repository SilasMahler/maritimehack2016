-- User can edit his own Display Name
CREATE TABLE `vt_trip_stations` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `trip_id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`,`trip_id`),
  FOREIGN KEY (`trip_id`) REFERENCES vesseltrip(`id`)
);
