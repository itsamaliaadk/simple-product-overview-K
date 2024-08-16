import { Link } from "react-router-dom";
import React from "react";


export default function Navbar() {
    
        return (
            <nav className="navbar bg-pink-300 py-5 flex justify-between flex-wrap">
                
                <div className="flex items-center ml-14">
                    <Link to="/" className="nav-brand font-bold">Camelia's
                    </Link>
                </div>

                    <ul className="nav-menu flex items-center mr-14">
                        <li className="nav-item"> 
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                    </ul>
                    
                    
                
            </nav>
        )
}







