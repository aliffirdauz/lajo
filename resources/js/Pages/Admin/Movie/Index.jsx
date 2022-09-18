import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage, movies }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <PrimaryButton type="button" className="w-40 mb-8">Insert New Movie</PrimaryButton>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center mt-8">
                <thead>
                    <tr>
                        <th className="w-1/4">Image</th>
                        <th className="w-1/4">Name</th>
                        <th className="w-1/4">Category</th>
                        <th className="w-1/4">Rating</th>
                        <th className="w-1/4" colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img src={`/storage/${movie.thumbnail}`} alt={movie.name} className="w-32 rounded-md" />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link href={route('admin.dashboard.movie.edit', movie.id)}>
                                    <PrimaryButton type="button" className="w-20 mb-4" variant="warning">Edit</PrimaryButton>
                                </Link>
                            </td>
                            <td>
                                {/* <Link href={route("admin.dashboard.movie.destroy", movies.id)}> */}
                                <PrimaryButton type="button" className="w-20 mb-2" variant="danger">Delete</PrimaryButton>
                                {/* </Link> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    )
}