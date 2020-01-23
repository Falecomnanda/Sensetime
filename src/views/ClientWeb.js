import React from 'react';
import { Link } from 'react-router-dom';

const ClientWeb = () => {
    return(
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-12 d-flex justify-content-center">
                    <Link to="/home" className="btn btn-primary">Calendario</Link>
                </div>
            </div>
        </div>
        
    )
}
export default ClientWeb;