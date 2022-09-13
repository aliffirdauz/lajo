import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";
import { Head } from "@inertiajs/inertia-react";

export default function Dashboard() {
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
        <Authenticated>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {/* <!-- Movie Thumbnail --> */}
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovie key={i} slug="the-batman-in-love" name={`The Batman In Love ${i}`} category="Action" thumbnail="https://picsum.photos/id/1/300/300" rating={i + 1} />
                    ))}
                </Flickity>
            </div>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4 mt-4">Browse</div>
                <Flickity className="gap-[30px]" options={flickityOption}>
                    {/* <!-- Movies --> */}
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <MovieCard key={i} slug="the-batman-in-love" name={`The Batman In Love ${i}`} category="Action" thumbnail="https://picsum.photos/id/1/300/300"/>
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}