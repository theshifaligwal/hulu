import {BadgeCheckIcon,
CollectionIcon,
HomeIcon,
LightningBoltIcon,
SearchIcon,
UserIcon} from "@heroicons/react/outline"

import Image from "next/image"
import HeaderItem from "./HeaderItem"
function Header() {
    return (
        <header className="">
        <div>
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Home" Icon={LightningBoltIcon} />
        <HeaderItem title="Home" Icon={BadgeCheckIcon} />
        <HeaderItem title="Home" Icon={CollectionIcon} />
        <HeaderItem title="Home" Icon={SearchIcon} />
        <HeaderItem title="Home" Icon={UserIcon} />
        </div>
            <Image className="object-contain" src='https://links.papareact.com/ua6' width={100} height={100}/>
        </header>
    )
}

export default Header
