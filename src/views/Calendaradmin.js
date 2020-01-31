import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Navbar from '../components/Navbar'
import BaseCalendar from './../components/BaseCalendar'
import Creardatos from '../components/ModalCreardatos';
import Modificar from '../components/Modalmodificar';
import Eliminar from '../components/ModalEliminar';
import SubirFoto from '../components/ModalPhoto';

const Calendaradmin = props => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center mt-2">
                    <Navbar />
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-4"></div>
                <div className="col-md-4 form-group text-center bg-light">
                    <h6 className="form-text text-muted text-left"></h6>
                    <div className="d-flex justify-content-center bg-light">
                        <div className="text-center mr-3">
                            <i className="far fa-plus-square fa-2x text-muted align-bottom" data-toggle="modal" data-target="#exampleModal"></i>
                            <p className="modalsp text-muted">Crear datos</p>
                        </div>
                        <div className="text-center mr-3">
                            <i className="fas fa-wrench fa-2x text-muted align-bottom" data-toggle="modal" data-target="#ModalModificar"></i>
                            <p className="modalsp text-muted">Modificar datos</p>
                        </div>
                        <div className="text-center mr-3">
                            <i className="far fa-trash-alt fa-2x text-muted align-bottom" data-toggle="modal" data-target="#ModalEliminar"></i>
                            <p className="modalsp text-muted">Eliminar datos</p>
                        </div>
                        <div className="text-center">
                            <i className="fas fa-upload fa-2x text-muted align-bottom" data-toggle="modal" data-target="#ModalSubirFoto"></i>
                            <p className="modalsp text-muted">Cambiar logo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 form-group">
                    <h6 className="form-text text-muted text-left">Seleccione sede y curso</h6>
                    <div className="d-flex justify-content-center">
                        <select id="selectSedeAdmin" className="form-control mr-2 oc" onChange={e => actions.subadmin(e)}>
                            <option>Sede</option>
                            {!!store.sedes.length > 0 &&
                                store.sedes.map((item, i) => {
                                    return <option key={i}>{item.sede}</option>
                                })
                            }
                        </select>
                        <select id="selectProfesorAdmin" className="form-control" onChange={e => actions.subadmin(e)}>
                            <option>Profesor</option>
                            {!!store.details_cursos.length > 0 &&
                                store.details_cursos.map((item, i) => {
                                    /* console.log(store.sedeAdmin)
                                    console.log(item.sede.id) */
                                    if (store.sedeAdminIndex === item.sede.id) {
                                        return <option key={i}>{item.profesor.profesor}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <select id="selectCursoAdmin" className="form-control" onChange={e => actions.subadmin(e)}>
                        <option>Curso</option>
                        {!!store.details_cursos.length > 0 &&
                            store.details_cursos.map((item, i) => {
                                /* console.log(store.profesorAdmin)
                                console.log(item.profesor.profesor)  */
                                if (store.profesoresAdminText === item.profesor && store.sedeAdminIndex === item.sede.id) {
                                    return <option key={i}>{item.curso.curso}</option>
                                }
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center">
                    <h6 className={`${store.cursoAdminText==="Curso"||store.profesorAdminText==="Profesor"||store.sedeAdminText==="Sede"?"d-none":"pt-2 text-muted"}`}>Taller de {store.cursoAdminText} sede {store.sedeAdminText} profesor(a) {store.profesorAdminText} Calendario del 01-01-2020 al 07-01-2020</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <BaseCalendar />
                </div>
                <div className="col-md-12 text-center mb-2">
                    <small className="form-text text-muted">Powered by Sensetime®</small>
                </div>
            </div>
            <Creardatos />
            <Modificar />
            <Eliminar />
            <SubirFoto />
        </div >

    )
}

export default Calendaradmin;        