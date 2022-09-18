import Authenticated from "@/Layouts/Authenticated/Index"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import Checkbox from "@/Components/Checkbox"
import ValidationErrors from "@/Components/ValidationErrors"
import { Head, useForm } from "@inertiajs/inertia-react"
import PrimaryButton from "@/Components/PrimaryButton"


export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type == "file" ? event.target.files[0] : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('admin.dashboard.movie.store'));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput type="text" name="name" variant="primary-outline" className="w-full" placeholder="Movie name" handleChange={onHandleChange} isError={errors.name} required />
                <InputLabel forInput="category" value="Category" className="mt-4" />
                <TextInput type="text" name="category" variant="primary-outline" className="w-full" placeholder="Movie category" handleChange={onHandleChange} isError={errors.category} required />
                <InputLabel forInput="video_url" value="Video URL" className="mt-4" />
                <TextInput type="url" name="video_url" variant="primary-outline" className="w-full" placeholder="Movie url" handleChange={onHandleChange} isError={errors.video_url} required />
                <InputLabel forInput="thumbnail" value="Thumbnail" className="mt-4" />
                <TextInput type="file" name="thumbnail" variant="primary-outline" className="w-full" placeholder="Movie thumbnail" handleChange={onHandleChange} isError={errors.thumbnail} required />
                <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <TextInput type="number" name="rating" variant="primary-outline" className="w-full" placeholder="Movie rating" handleChange={onHandleChange} isError={errors.rating} required />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel forInput="is_featured" value="Is Featured" className="ar-3 mt-1" />
                    <Checkbox name="is_featured" handleChange={(e) => setData=("is_featured", e.target.checked)} />
                </div>
                <PrimaryButton type="submit" className="mt-4 w-20 mb-8" processing={processing}>Save</PrimaryButton>
            </form>
        </Authenticated>
    )
}