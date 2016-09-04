<?php

namespace UserFrosting\Vesseltrip;

require_once('controllers/TripController.php');
require_once('models/Port.php');
require_once('models/Trip.php');
require_once('models/TripToPort.php');
require_once('models/Vessel.php');
require_once('vendor/Upload/Autoloader.php');

use UserFrosting as UF;

$twig = $app->view()->getEnvironment();
$loader = $twig->getLoader();
$loader->addPath($app->config('plugins.path') . '/UserFrosting-vesseltrip/templates');


$table_port = new UF\DatabaseTable($app->config('db')['db_prefix'] . 'port', [
    'name',
    'lon',
    'lat']);

$table_trip = new UF\DatabaseTable($app->config('db')['db_prefix'] . 'trip', [
    'user_id',
    'vessel_id',
    'created_at',
    'updated_at']);

$table_triptoport = new UF\DatabaseTable($app->config('db')['db_prefix'] . 'triptoport', [
    'trip_id',
    'port_id',
    'order']);

$table_vessel = new UF\DatabaseTable($app->config('db')['db_prefix'] . 'vessel', [
    'imo',
    'callsign',
    'mmsi',
    'name',
    'type',
    'length',
    'beam',
    'manager',
    'owner',
    'insurer',
    'eng_builder']);

UF\Database::setSchemaTable('port', $table_port);
UF\Database::setSchemaTable('trip', $table_trip);
UF\Database::setSchemaTable('triptoport', $table_triptoport);
UF\Database::setSchemaTable('vessel', $table_vessel);

$controller = new TripController($app);

$app->get('/trips/?', function () use ($controller) {
    $controller->viewTrips();
})->name('uri_trips');

$app->get('/ports/?', function () use ($controller) {
    $controller->viewPorts();
});

$app->get('/vessels/?', function () use ($controller) {
    $controller->viewVessels();
});
