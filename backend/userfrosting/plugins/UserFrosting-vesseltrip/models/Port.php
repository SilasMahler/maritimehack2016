<?php

namespace UserFrosting\Vesseltrip;

use \Illuminate\Database\Capsule\Manager as Capsule;

class Port extends \UserFrosting\UFModel {
	
	protected static $_table_id = 'port';
    
    public function __construct($properties = []) {
        parent::__construct($properties);
    }
}
