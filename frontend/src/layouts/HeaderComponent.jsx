import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
    return (
        <div>
            <ul className="nav">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/news"className="nav-link">News</Link></li>
                <li className="nav-item"><Link to="/login"className="nav-link">Login</Link></li>
                <li className="nav-item"><Link to="/register"className="nav-link">Register</Link></li>
            </ul>
        </div>
    )
}
