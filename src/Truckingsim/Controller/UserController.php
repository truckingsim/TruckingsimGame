<?php

namespace App\Controller;

class UserController
{
    public function index()
    {
        // list users;

        return 'list users';
    }

    public function edit($id)
    {
        // show edit

        return 'edit ' . $id;
    }

    public function show($id)
    {
        // show user id

        return 'show ' . $id;
    }

    public function store()
    {
        // create a new user, using POST method.

        return 'store';
    }

    public function update($id)
    {
        // update the user #id, using PUT method

        return 'update ' . $id;
    }

    public function destroy($id)
    {
        // delete the user #id, using DELETE method
    }
}
