<?php

namespace UserFrosting\Vesseltrip;

class TripController extends \UserFrosting\BaseController {
    public function __construct($app) {
        $this->_app = $app;
    }

    public function viewTrips() {
        echo '{"type": "FeatureCollection", "features": [';
        
        $i = 1;
        $trips = Trip::all();
        foreach($trips as $trip) {
            echo '{"type": "Feature", "properties": {"name": "' . \UserFrosting\User::find($trip->user_id)->display_name . '"}, "geometry": {"type": "LineString", "coordinates": [';
            
            $j = 1;
            $ports = $trip->relationsOrdered();
            foreach($ports as $port) {
                $port = $port->port();
                echo '[' . $port->lat . ', ' . $port->lon . ']' . (($j++ != count($ports)) ? ', ' : '');
            }
            
            echo ']}}' . (($i++ != count($trips)) ? ', ' : '');
        }
        
        echo ']}';
    }

    public function viewPorts() {
        echo json_encode(Port::all());
    }

    public function viewVessels() {
        echo json_encode(Vessel::all());
    }
}