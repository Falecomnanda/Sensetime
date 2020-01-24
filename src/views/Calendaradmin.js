import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import asdasd from './../components/asdasd.png'
import { Link } from 'react-router-dom';

const Calendaradmin = props => {
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
                    <select className="form-control mr-2">
                        <option className="" value="">Categoría</option>
                        <option className="" value="">Peluquería</option>
                        <option className="" value="">Yoga</option>
                        <option className="" value="">Pilates</option>
                    </select>
                    <select className="form-control">
                        <option className="" value="">Cupos</option>
                        <option className="" value="">0</option>
                        <option className="" value="">1</option>
                        <option className="" value="">2</option>
                        <option className="" value="">3</option>
                        <option className="" value="">4</option>
                        <option className="" value="">5</option>
                        <option className="" value="">6</option>
                        <option className="" value="">7</option>
                        <option className="" value="">8</option>
                        <option className="" value="">10</option>
                        <option className="" value="">11</option>
                        <option className="" value="">12</option>
                        <option className="" value="">13</option>
                        <option className="" value="">14</option>
                        <option className="" value="">15</option>
                        <option className="" value="">16</option>
                        <option className="" value="">17</option>
                        <option className="" value="">18</option>
                        <option className="" value="">19</option>
                        <option className="" value="">20</option>
                        <option className="" value="">21</option>
                        <option className="" value="">22</option>
                        <option className="" value="">23</option>
                        <option className="" value="">24</option>
                        <option className="" value="">25</option>
                    </select>
                </div>
                <div className="col-md-4 d-flex justify-content-end">
                        <Link to="/settingsadmin"><i class="fas fa-cogs fa-2x text-muted"></i></Link>
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
                <div className="col-md-12 text-right">
                    <button type="button" class="btn btn-primary">Salvar</button>
                </div>
                <div className="col-md-12 text-center">
                    <small className="form-text text-muted ">Powered by Sensetime MR</small>
                </div>
            </div>
        </div >

    )
}

export default Calendaradmin;        