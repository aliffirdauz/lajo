import Authenticated from "@/Layouts/Authenticated/Index"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import Checkbox from "@/Components/Checkbox"
import ValidationErrors from "@/Components/ValidationErrors"
import { Head, useForm } from "@inertiajs/inertia-react"
import PrimaryButton from "@/Components/PrimaryButton"
import { Inertia } from "@inertiajs/inertia"


export default function Edit({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type == "file" ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail == movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route('admin.dashboard.movie.update', movie.id), {
            _method: 'PUT',
            ...data,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update movie : {movie.name}</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput type="text" name="name" defaultValue={movie.name} variant="primary-outline" className="w-full" placeholder="Movie name" handleChange={onHandleChange} isError={errors.name} required />
                <InputLabel forInput="category" value="Category" className="mt-4" />
                <TextInput type="text" name="category" defaultValue={movie.category} variant="primary-outline" className="w-full" placeholder="Movie category" handleChange={onHandleChange} isError={errors.category} required />
                <InputLabel forInput="video_url" value="Video URL" className="mt-4" />
                <TextInput type="url" name="video_url" defaultValue={movie.video_url} variant="primary-outline" className="w-full" placeholder="Movie url" handleChange={onHandleChange} isError={errors.video_url} required />
                <img src={`/storage/${movie.thumbnail}`} alt={movie.name} className="w-1/4 mt-4" />
                <InputLabel forInput="thumbnail" value="Thumbnail" className="mt-4" />
                <TextInput type="file" name="thumbnail"  variant="primary-outline" className="w-full" placeholder="Movie thumbnail" handleChange={onHandleChange} isError={errors.thumbnail} />
                <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <TextInput type="number" name="rating" defaultValue={movie.rating} variant="primary-outline" className="w-full" placeholder="Movie rating" handleChange={onHandleChange} isError={errors.rating} required />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel forInput="is_featured" value="Is Featured" className="ar-3 mt-1" />
                    <Checkbox name="is_featured" handleChange={(e) => setData=("is_featured", e.target.checked)} checked={movie.is_featured} />
                </div>
                <PrimaryButton type="submit" className="mt-4 w-20 mb-8" processing={processing}>Save</PrimaryButton>
            </form>
        </Authenticated>
    )

}