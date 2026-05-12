import { Link } from "@heroui/react";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/"style={{textDecoration:'none'}}>Home</Link></li>
                        <li><Link href="/taskPage" style={{textDecoration:'none'}}>Task Page</Link></li>
                    </ul>
                    <div className="cursor-pointer">
                        <ToggleButton></ToggleButton>
                    </div>
                </header>
            </nav>
           
        </div>
    );
};

export default Navbar;