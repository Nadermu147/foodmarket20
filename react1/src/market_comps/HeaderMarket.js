import React from 'react'
function HeaderMarket(props) {
    return (
        <header className="container-fluid bg-dark text-white">
            <div className="container ">
                <div className="row align-items-center justify-content-between">
                <div className="d-flex align-items-center ">
                    <div className="logo mr-2">
                        <h2>Nader Market</h2>
                    </div>
                   
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Food</a>
                            <a href="#">Animals</a>
                            <a href="#">Clothing</a>
                        </nav>
                    </div>
                    <div className="search d-flex">
                        <input className="form-control" />
                        <button className="bt btn-danger">Search</button>

                    </div>
                </div>
            </div>

        </header>
    )
}
export default HeaderMarket;
