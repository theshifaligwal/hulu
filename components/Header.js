import Image from "next/image"
function Header() {
    return (
        <header className="">
        <div>
        <HeaderItem />
        </div>
            <Image className="object-contain" src='https://links.papareact.com/ua6' width={100} height={100}/>
        </header>
    )
}

export default Header
