import Link from "next/link";

const NavBar = () => {
    return (
        <header className=" bg-yellow-500">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2 items-center">
                <Link href="/" className="font-extrabold text-2xl hover:text-white">NONTON MOVIE</Link>
                <div className="flex gap-2 font-bold">
                    <Link href="/trending" className="hover:text-white">RENDING</Link>
                    <Link href="/upcoming" className="hover:text-white">UPCOMING</Link>
                    <Link href="/now-playing" className="hover:text-white">NOW PLAYING</Link>
                </div>
            </div>
        </header>
    );
}
export default NavBar;