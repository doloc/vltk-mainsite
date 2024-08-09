import Link from "next/link";

const SideBar = () => {
    return (
        <div className="mb:hidden z-50 fixed w-[12%] top-[12.5%] right-[1%] bg-cover bg-center bg-no-repeat aspect-[249/650] bg-[url('/images/side-bar-bg.png')]">
            <div className="absolute w-[61%] top-[30%] right-[7%] flex flex-col items-center gap-[0.3vw]">
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[194/165] bg-[url('/images/btn-napthe.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-side-bar-choingay.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-hotro.png')] hover:cursor-pointer hover:brightness-110"></Link>
                <Link href="/loi-dai" className="w-full bg-cover bg-center bg-no-repeat aspect-[247/76] bg-[url('/images/btn-zalo.png')] hover:cursor-pointer hover:brightness-110"></Link>
            </div>
        </div>
    )
}

export default SideBar;