import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import asdasd from './../components/asdasd.png'

const Calendar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-5">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-2">
                    <h6 className="form-text text-muted">Seleccione su categoria</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 form-group d-flex justify-content-center mt-2">
                    <select className="form-control">
                        <option className="" value="">Peluquería</option>
                        <option className="" value="">Yoga</option>
                        <option className="" value="">Pilates</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-5">
                    <h5>Yoga 1 Calendar from 1 january to january</h5>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-5 d-flex justify-content-center">
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
