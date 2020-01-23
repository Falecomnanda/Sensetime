import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar'


const Signup = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-2">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="card mt-2">
                        <div className="card-header text-muted">
                            Registro
                    </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label className="text-muted">Usuario / Email</label>
                                <input type="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Teléfono</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Contraseña</label>
                                <input type="password" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="text-muted">Repita su contraseña</label>
                                <input type="password" className="form-control" />
                                <small className="form-text text-muted">*Todos los campos son obligatorios</small>
                            </div>
                        </div>
                        <div className="card-footer d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary btn-block">Crear Usuario</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center pt-1">
                        <small className="form-text text-muted">Powered by Sensetime MR</small>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Signup;