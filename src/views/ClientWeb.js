import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const ClientWeb = () => {
    const { store, actions } = useContext(Context);
    return(
        <div className="container">
            <div className="row pt-5">
                <div className="col-md-12 d-flex justify-content-center">
                </div>
            </div>
        </div>
    )
}
export default ClientWeb;