import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="./">Test Your Skills, Fest Your Career</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link active" href="./">Topics</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="./statistics">Statistics</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="./blog">Blog</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;