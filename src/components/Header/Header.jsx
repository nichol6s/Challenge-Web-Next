import "./Header.css"
import Link from "next/link"
import {BiSolidInfoCircle as Info} from "react-icons/bi"
import {AiFillHome as Home} from "react-icons/ai"
import {FaBicycle as Bike} from "react-icons/fa"

export default function Header(){
    return (
        <header>
            <img src="/porto.png" alt="Porto's logo without background"/>
            <nav>
                <ul>
                    <li><Link href="/"><Home className="logo"></Home></Link></li>
                    <li><Link href="/about"><Info className="logo"></Info></Link></li>
                    <li><Link href="/registro"><Bike className="logo"></Bike></Link></li>
                </ul>
            </nav>
        </header>
    );
}   