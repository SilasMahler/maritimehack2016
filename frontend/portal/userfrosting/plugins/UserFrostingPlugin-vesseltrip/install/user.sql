-- User can edit his own Display Name
UPDATE uf_authorize_group SET conditions = 'equals(self.id, user.id)&&in(property,["display_name","email","locale","password"])' WHERE hook = 'update_account_setting' AND group_id = 1;

CREATE TABLE `uf_user_application` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

DELIMITER //

CREATE TRIGGER del_uf_user BEFORE DELETE ON uf_user
  FOR EACH ROW
  BEGIN
    DELETE FROM uf_user_application WHERE user_id = OLD.id;
  END;
//
