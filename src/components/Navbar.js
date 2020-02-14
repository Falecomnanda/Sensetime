import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Navbar = () => {
    const { store, /*actions*/ } = useContext(Context);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center pb-2">
                        <Link to="/login">
                            <img src="yoga2.jpg" width="200" alt="Not Found " />
                        </Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-end">
                    {!!store.currentUser.user && (
                        <Link to="/login">
                            <p className="form-text text-muted">Logout</p>
                        </Link>
                    )}
                    </div>
                </div>
            </div>














        </div>
    )
}

export default Navbar;