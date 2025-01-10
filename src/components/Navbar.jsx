function Navbar (props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#333' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    AgÜacaticos
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" style={{ backgroundColor: '#555', borderRadius: '5px', fontWeight: 'bold', color: 'white' }}>
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>
                                Acerca de
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>
                                Servicios
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{ color: 'white' }}>
                                Contactos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
