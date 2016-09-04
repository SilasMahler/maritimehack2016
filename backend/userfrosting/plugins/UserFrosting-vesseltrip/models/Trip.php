<?php

namespace UserFrosting\Vesseltrip;

use \Illuminate\Database\Capsule\Manager as Capsule;

class Trip extends \UserFrosting\UFModel {
	
	protected static $_table_id = 'trip';
    
    public function __construct($properties = []) {
        parent::__construct($properties);
    }
    
    public function relationsOrdered() {
        return TripToPort::where('trip_id', $this->id)->orderBy('order', 'desc')->get();
    }
}
