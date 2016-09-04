<?php

namespace UserFrosting\Vesseltrip;

class TripController extends \UserFrosting\BaseController {
    public function __construct($app) {
        $this->_app = $app;
    }

    public function viewTrips() {
        $resp = '{"type": "FeatureCollection", "features": [';
        
        $i = 1;
        $trips = Trip::all();
        foreach($trips as $trip) {
            $resp .= '{"type": "Feature", "properties": {"name": "' . \UserFrosting\User::find($trip->user_id)->display_name . '"}, "geometry": {"type": "LineString", "coordinates": [';
            
            $j = 1;
            $ports = $trip->relationsOrdered();
            foreach($ports as $port) {
                $port = $port->port();
                $resp .= '[' . $port->lat . ', ' . $port->lon . ']' . (($j++ != count($ports)) ? ', ' : '');
            }
            
            $resp .= ']}}' . (($i++ != count($trips)) ? ', ' : '');
        }
        
        $resp .= ']}';
        
        echo $resp;
    }

    public function viewPorts() {
        echo json_encode(Port::all(), JSON_PRETTY_PRINT);
    }

    public function viewVessels() {
        echo json_encode(Vessel::all(), JSON_PRETTY_PRINT);
    }
    
    public function createTrip() {
        $post = $this->_app->request->post();
        var_dump($post);
    }
}
