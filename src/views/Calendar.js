import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import asdasd from './../components/asdasd.png'

const Calendar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-3">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-2">
                    <h6 className="form-text text-muted">Seleccione su Categoria y Sede</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 form-group d-flex justify-content-center mt-2">
                    <select className="form-control">
                        <option className="" value="">Categoría</option>
                        <option className="" value="">Peluquería</option>
                        <option className="" value="">Yoga</option>
                        <option className="" value="">Pilates</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 form-group d-flex justify-content-center mt-2">
                    <select className="form-control">
                        <option className="" value="">Sede</option>
                        <option className="" value="">Providencia</option>
                        <option className="" value="">Las Condes</option>
                        <option className="" value="">Nuñoa</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-2">
                    <h6 className="text-muted d-block">Yoga sede Las Condes </h6>
                    <h6 className="text-muted d-block">Calendario del 01-01-2020 al 07-01-2020</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-2 d-flex justify-content-center">
                    <img src={asdasd} width="1200" alt="" />
                </div>
                <div className="col-md-12 text-center">
                    <small className="form-text text-muted ">Powered by Sensetime MR</small>
                </div>
            </div>
        </div>

    )
}

export default Calendar;        
