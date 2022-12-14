<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movies;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name'=>'The Shawshank Redemption',
                'slug'=>'the-shawshank-redemption',
                'category'=>'Drama',
                'video_url'=>'https://www.youtube.com/embed/6hB3S9bIaco',
                'thumbnail'=>'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
                'rating'=>9.3,
                'is_featured'=>1,
            ],
            [
                'name'=>'The Godfather',
                'slug'=>'the-godfather',
                'category'=>'Crime',
                'video_url'=>'https://www.youtube.com/embed/sY1S34973zA',
                'thumbnail'=>'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'rating'=>9.2,
                'is_featured'=>0,
            ],
            [
                'name'=>'The Dark Knight',
                'slug'=>'the-dark-knight',
                'category'=>'Action',
                'video_url'=>'https://www.youtube.com/embed/EXeTwQWrcwY',
                'thumbnail'=>'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
                'rating'=>9.0,
                'is_featured'=>0,
            ]
        ];
        Movies::insert($movies);
    }
}
