import MovieList from "@/components/MovieList";
import Header from "@/components/MovieList/Header";
import MovieTrending from "@/components/MovieList/movieTrending";
import Image from "next/image";

const Page = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=887a4ba03a5e84006f98bbbed280d4f2`
  )
  const movieTop = await response.json()

  const response2 = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=da9c4514e37d4cd238d6e0205a120ed9`
  )
  const movieTop2 = await response2.json()

  return (
    <div>
      <Header title={'TRENDING TODAY'} linkHref={''} linkTitle={'LIHAT SEMUA>>'} />
      <MovieList api={movieTop} />
      <Header title={'TRENDING ALL'} linkHref={''} linkTitle={'LIHAT SEMUA>>'} />
      <MovieTrending api={movieTop2} />
    </div>
  )
}
export default Page
