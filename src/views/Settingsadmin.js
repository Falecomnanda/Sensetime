import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import Creardatos from '../components/ModalCreardatos';
import Modificar from '../components/Modalmodificar';
import Eliminar from '../components/ModalEliminar';


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
                <div className="col-md-8 d-flex justify-content-end">
                    <i class="fas fa-camera-retro fa-1x text-muted"></i>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-1"></div>
                <div className="col-md-10 d-flex justify-content-between">
                    <div className="text-center text-black-50">
                        <i class="far fa-plus-square fa-5x mt-5" data-toggle="modal" data-target="#exampleModal"></i>
                        <p classname="modalsp">Crear datos</p>
                    </div>
                    <div className="text-center text-black-50">
                        <i class="fas fa-wrench fa-5x text-muted mt-5" data-toggle="modal" data-target="#ModalModificar"></i>
                        <p classname="modalsp">Modificar datos</p>
                    </div>

                    <div className="text-center text-black-50">
                        <i class="far fa-trash-alt fa-5x text-muted mt-5" data-toggle="modal" data-target="#ModalEliminar"></i>
                        <p classname="modalsp" >Eliminar datos</p>
                    </div>
                </div>
            </div>
            <Creardatos />
            <Modificar />
            <Eliminar />
        </div>

    )

}

export default Settingsadmin;  