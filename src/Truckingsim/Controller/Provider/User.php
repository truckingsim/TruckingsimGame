<?php

namespace App\Controller\Provider;

use Silex\ControllerProviderInterface;
use Silex\Application;

class User implements ControllerProviderInterface
{
    public function connect(Application $app)
    {
        $users = $app['controllers_factory'];

        $users->get('/', 'App\\Controller\\UserController::index');
        $users->post('/', 'App\\Controller\\UserController::store');
        $users->get('/{id}', 'App\\Controller\\UserController::show');
        $users->get('/edit/{id}', 'App\\Controller\\UserController::edit');
        $users->put('/{id}', 'App\\Controller\\UserController::update');
        $users->delete('/{id}', 'App\\Controller\\UserController::destroy');

        return $users;
    }
}
