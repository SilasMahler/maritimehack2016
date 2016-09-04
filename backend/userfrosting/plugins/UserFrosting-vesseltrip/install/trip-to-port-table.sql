CREATE TABLE `uf_triptoport` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `trip_id` int(11) unsigned NOT NULL,
  `port_id` int(11) unsigned NOT NULL,
  `order` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`trip_id`) REFERENCES uf_trip(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`port_id`) REFERENCES uf_port(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
