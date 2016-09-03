<?php

namespace UserFrosting\Vesseltrip;

use \Illuminate\Database\Capsule\Manager as Capsule;

class Vessel extends \UserFrosting\UFModel {
	
	protected static $_table_id = 'vessel';
    
    public function __construct($properties = []) {
        parent::__construct($properties);
    }
}
