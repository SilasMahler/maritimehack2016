<?php

namespace UserFrosting\Vesseltrip;

use \Illuminate\Database\Capsule\Manager as Capsule;

class TripToPort extends \UserFrosting\UFModel {
	
	protected static $_table_id = 'triptoport';
    
    public function __construct($properties = []) {
        parent::__construct($properties);
    }
    
    public function port() {
        return Port::find($this->port_id);
    }
}
