-- User can edit his own Display Name
CREATE TABLE `vt_triprating` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `vessel_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rate_food` double(3) DEFAULT NULL,
  `rate_crew` double(3) DEFAULT NULL,
  `rate_captain` double(3) DEFAULT NULL,
  `rate_cabin` double(3) DEFAULT NULL,
  PRIMARY KEY (`id`,`vessel_id`, `user_id`),
  FOREIGN KEY (`vessel_id`) REFERENCES vesserl_table(`imo`)
  FOREIGN KEY (`user_id`) REFERENCES user(`id`)
);
