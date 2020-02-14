import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Navbar from '../components/Navbar'
import Creardatos from '../components/ModalCreardatos';
import Modificar from '../components/Modalmodificar';
import SubirFoto from '../components/ModalPhoto';
import CrearNuevoCurso from '../components/Modalnuevocurso';
import CrearNuevaSede from '../components/ModalCrearNuevasede';
import NuevoProfesor from '../components/ModalNuevoProfesor';
import Tabla from './../components/tabla';
// import Detailscursos from './../components/detailscursos';
// import Filter from './../components/filter';


const Calendaradmin = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center mt-2">
                        <Navbar />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"></div>
                    <div className="col-md-12 form-group text-center bg-light">
                        <h6 className="form-text text-muted text-left"></h6>
                        <div className="d-flex justify-content-center bg-light">
                            <div className="text-center mr-3">
                                <i className="fa fa-plus-square fa-2x text-muted align-bottom" data-toggle="modal" data-target="#exampleModal"></i>
                                <p className="modalsp text-muted">Crear Información</p>
                            </div>
                            {/* <div className="text-center mr-3">
                            <i className="far fa fa-building fa-2x text-muted align-bottom" data-toggle="modal" data-target="#nuevasede"></i>
                            <p className="modalsp text-muted">Crear nueva SEDE</p>
                        </div> */}
                            {/* <div className="text-center mr-3">
                            <i className="fa fa-book fa-2x text-muted align-bottom" data-toggle="modal" data-target="#nuevocurso"></i>
                            <p className="modalsp text-muted">Crear nuevo CURSO</p>
                        </div> */}
                            {/* <div className="text-center mr-3">
                            <i className="fa fa-user fa-2x text-muted align-bottom" data-toggle="modal" data-target="#nuevoprofesor"></i>
                            <p className="modalsp text-muted">Crear nuevo PROFESOR</p>
                        </div> */}
                            <div className="text-center mr-3">
                                <i className="fas fa-wrench fa-2x text-muted align-bottom" data-toggle="modal" data-target="#ModalModificar"></i>
                                <p className="modalsp text-muted">Montar Cursos</p>
                            </div>
                            {/* <div className="text-center mr-3">
                            <i className="fa fa-trash fa-2x text-muted align-bottom" data-toggle="modal" data-target="#ModalEliminar"></i>
                            <p className="modalsp text-muted">Eliminar datos</p>
                        </div> */}
                            <div className="text-center">
                                <i className="fas fa-upload fa-2x text-muted align-bottom" data-toggle="modal" data-target="#ModalSubirFoto"></i>
                                <p className="modalsp text-muted">Cambiar logo</p>
                            </div>
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
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 form-group">
                        <h6 className="form-text text-muted text-center">Seleccione sede y curso</h6>
                        <div className="d-flex justify-content-center">
                            <select id="" className="form-control mr-2 oc" name="filter_sede_id" onChange={e => actions.handleChange(e)}>
                                <option value="0">Sede</option>
                                {store.sedes.length > 0 &&
                                    store.sedes.map((item, i) => {
                                        return (<option key={i} value={item.id} >{item.sede}</option>)
                                    })},
                        </select>
                            <select id="" className="form-control" name="filter_profesor_id" onChange={e => actions.handleChange(e)}>
                                <option value="0">Profesor</option>
                                {store.profesores.length > 0 &&
                                    store.profesores.map((item, i) => {
                                        return (<option key={i} value={item.id}>{item.profesor}</option>)
                                    })},
                        </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-center">
                        <select id="" className="form-control" name="filter_curso_id" onChange={e => actions.handleChange(e)}>
                            <option value="0">Curso</option>
                            {store.cursos.length > 0 &&
                                store.cursos.map((item, i) => {
                                    return (<option key={i} value={item.id}>{item.curso}</option>)
                                })},
                    </select>
                    </div>
                </div>
                <div className="row">
                    <div className="offset-md-4 col-md-4 d-flex justify-content-center">
                        <button className="btn btn-primary btn-block mt-3" onClick={() => actions.postFilter()}>Buscar</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mb-2">
                        <small className="form-text text-muted">Powered by Sensetime®</small>
                    </div>
                </div>
                <Creardatos />
                <Modificar />
                <SubirFoto />
                <CrearNuevoCurso />
                <CrearNuevaSede />
                <NuevoProfesor />
                <Tabla />

            </div >
            
            
        </>
    )
}

export default Calendaradmin;        