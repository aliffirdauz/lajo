import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard({auth, featuredMovie, movies}) {
    const flickityOption = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated auth={auth}>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {/* <!-- Movie Thumbnail --> */}
                    {featuredMovie.map((featuredMovie) => (
                        <FeaturedMovie key={featuredMovie.id} slug={featuredMovie.slug} name={featuredMovie.name} category={featuredMovie.category} thumbnail={featuredMovie.thumbnail} rating={featuredMovie.rating} />
                    ))}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {/* <!-- Movies --> */}
                    {movies.map((movies) => (
                        <MovieCard key={movies.id} slug={movies.slug} name={movies.name} category={movies.category} thumbnail={movies.thumbnail}/>
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}