import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import Navbar from '../components/Navbar';
import TablaUser from './../components/TablaUser'

const Calendar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-2">
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
                <div className="col-md-4 form-group">
                    <h6 className="form-text text-muted text-left">Seleccione Sede y Curso</h6>
                    <div className="d-flex justify-content-center">
                        <select id="" className="form-control mr-2 oc" name="sede_id" onChange={e => actions.handleChange(e)}>
                            <option value="">Sede</option>
                            {!!store.sedes.length > 0 &&
                                store.sedes.map((item, i) => {
                                    return (<option key={i} value={item.id} >{item.sede}</option>)
                                })}
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <select className="form-control" name="curso_id" onChange={e => actions.handleChange(e)}>
                        <option>Curso</option>
                        {!!store.cursos.length > 0 &&
                            store.cursos.map((item, i) => {
                                return (<option key={i} value={item.id}>{item.curso}</option>)
                            })}
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center mt-2">
                    <h6 className="text-muted d-block">Sede LAS CONDES calendario del 01-01-2020 al 07-01-2020</h6>
                </div>
            </div>
            {
                store.alerta != '' ?
                    (
                        <div className="col-md-12 alert alert-success alert-dismissible fade show text-center" role="alert">
                            {store.alerta}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => actions.borrarAlert()}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    ) :
                    (
                        ""
                    )
            }
            <div className="row">
                <div className="col-md-12 mt-2 d-flex justify-content-center">
                    <TablaUser />
                </div>
                <div className="col-md-12 text-center mb-2">
                    <small className="form-text text-muted ">Powered by Sensetime®</small>
                </div>
            </div>
        </div >

    )
}

export default Calendar;        
