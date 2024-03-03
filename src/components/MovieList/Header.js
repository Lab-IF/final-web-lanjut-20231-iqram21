import Link from 'next/link'

const Header = ({title, linkHref, linkTitle}) => {
    return (
        <div className="flex py-4 justify-between px-4 items-center">
            <h1 className="text-blue-600 font-bold text-xl ">{title}</h1>
            <Link href={linkHref} className="md:text-20 text-md hover:text-blue-600 transition-all">{linkTitle}</Link>
        </div>
    )
}
export default Header