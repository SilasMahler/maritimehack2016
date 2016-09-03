CREATE TABLE `uf_trip` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `vessel_id` int(11) unsigned NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_id`) REFERENCES uf_user(`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (`vessel_id`) REFERENCES uf_vessel(`id`) ON DELETE CASCADE ON UPDATE CASCADE
);
