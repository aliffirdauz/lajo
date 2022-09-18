<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie as Movies;

class MovieController extends Controller
{
    public function show(Movies $movie)
    {
        return inertia('User/Dashboard/Movie/Show', [
            'movie' => $movie,
        ]);
    }
}
