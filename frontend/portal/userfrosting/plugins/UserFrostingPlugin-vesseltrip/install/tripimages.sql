-- User can edit his own Display Name
UPDATE uf_authorize_group SET conditions = 'equals(self.id, user.id)&&in(property,["display_name","email","locale","password"])' WHERE hook = 'update_account_setting' AND group_id = 1;

CREATE TABLE `vt_tripimages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `trip_id` int(11) NOT NULL,
  `image` ,
  `image_timestamp` date DEFAULT NULL,
  PRIMARY KEY (`id`,`trip_id`),
  FOREIGN KEY (`trip_id`) REFERENCES vesseltrip(`id`)
);
