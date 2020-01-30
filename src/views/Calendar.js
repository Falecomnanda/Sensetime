import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import BaseCalendar from './../components/BaseCalendar'

const Calendar = props => {
    const { store/*, actions*/ } = useContext(Context);
    return (
        <div className="container-fluid">
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
                        <option value="">Sede</option>
                        {!!store.sedes.length > 0 &&
                            store.sedes.map((item, i) => {
                                return (<option key={i} value={item.sede}>{item.sede}</option>)
                            })}
                    </select>
                </div>
            </div>
            <div className="row">4
                <div className="col-md-4"></div>
                <div className="col-md-4 form-group d-flex justify-content-center mt-2">
                    <select className="form-control">
                        <option value="">Cursos</option>
                        {!!store.cursos.length > 0 &&
                            store.cursos.map((item, i) => {
                                return (<option key={i} value={item.curso}>{item.curso}</option>)
                            })}
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-2">
                    <h6 className="text-muted d-block">Sede LAS CONDES calendario del 01-01-2020 al 07-01-2020</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-2 d-flex justify-content-center">
                    <BaseCalendar />
                </div>
                <div className="col-md-12 text-center mb-2">
                    <small className="form-text text-muted ">Powered by Sensetime®</small>
                </div>
            </div>
        </div >

    )
}

export default Calendar;        
