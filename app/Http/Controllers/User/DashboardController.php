<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movies;

use function Termwind\render;

class DashboardController extends Controller
{
    public function index()
    {
        $featuredMovie = Movies::whereIsFeatured(true)->get();
        $movies = Movies::all(); 
        
        return Inertia::render('User/Dashboard/Index', [
            'featuredMovie' => $featuredMovie,
            'movies' => $movies
        ]);
    }
}
