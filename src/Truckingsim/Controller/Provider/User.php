<?php

class User implements ControllerProviderInterface {
	public function connect(Application $app) {
		$users = $app['controllers_factory'];

		$users->get('/', 'TruckingSimGame\\Controller\\UserController::index');
		$users->post('/', 'TruckingSimGame\\Controller\\UserController::store');
		$users->get('/{id}', 'TruckingSimGame\\Controller\\UserController::show');
		$users->get('/edit/{id}', 'TruckingSimGame\\Controller\\UserController::edit');
		$users->put('/{id}', 'TruckingSimGame\\Controller\\UserController::update');
		$users->delete('/{id}', 'TruckingSimGame\\Controller\\UserController::destroy');
	}
}
