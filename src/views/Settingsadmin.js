import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import Creardatos from '../components/ModalCreardatos';
import Modificar from '../components/Modalmodificar';
import Eliminar from '../components/ModalEliminar';
import SubirFoto from '../components/ModalPhoto';


const Settingsadmin = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-3">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-3 d-flex justify-content-end">
                    <div className="text-center">
                        <i className="fas fa-upload fa-1x text-muted" data-toggle="modal" data-target="#ModalSubirFoto"></i>
                        {/* <br />
                        <p className="modalsp text-muted">Modificar</p> */}
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                
                <div className="col-md-4 col-12 d-flex justify-content-center">
                    <div className="text-center">
                        <i className="far fa-plus-square fa-5x mt-5 mb-3 text-muted" data-toggle="modal" data-target="#exampleModal"></i>
                        <p className="modalsp text-muted">Crear datos</p>
                    </div>
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center">
                    <div className="text-center">
                        <i className="fas fa-wrench fa-5x mt-5 mb-3 text-muted" data-toggle="modal" data-target="#ModalModificar"></i>
                        <p className="modalsp text-muted">Modificar datos</p>
                    </div>
                </div>
                <div className="col-md-4 col-12 d-flex justify-content-center">
                    <div className="text-center">
                        <i className="far fa-trash-alt fa-5x mt-5 mb-3 text-muted" data-toggle="modal" data-target="#ModalEliminar"></i>
                        <p className="modalsp text-muted" >Eliminar datos</p>
                    </div>
                </div>

            </div>
            <Creardatos />
            <Modificar />
            <Eliminar />
            <SubirFoto />
        </div >

    )

}

export default Settingsadmin;  