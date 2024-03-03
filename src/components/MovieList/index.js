import Image from 'next/image'
import Link from 'next/link'

const MovieList = ({ api }) => {
    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-4 px-2 py-5">
            {api.results.map((movie) => {
                return (
                    <Link href={`/${movie.mal_id}`} className=" p-1 cursor-pointer shadow-md rounded-md bg-yellow-500">
                        <Image
                            className=" rounded-md"
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt={movie.url}
                            width={800}
                            height={800} />
                        <h3
                            className=" font-bold md:text-base text-xs p-1 text-center object-cover hover:text-white"
                        >
                            {movie.title}
                        </h3>
                        <p className="text-center">{movie.release_date}</p>
                    </Link>
                )
            })}
        </div>

    );
}

export default MovieList