import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="px-20 py-20 flex justify-between bg-header items-center">
            <Link className="text-white text-20 font-bold" to="/">
                Home
            </Link>

            <ul className="default flex">
                <li>
                    <Link className="text-white" to="/watchlist">
                        Watch List
                    </Link>
                </li>
                <li>
                    <Link className="text-white px-20" to="/watched">
                        Watched
                    </Link>
                </li>
                <li>
                    <Link className="text-white" to="/add">
                        + Add
                    </Link>
                </li>
            </ul>
        </header>
    );
};
