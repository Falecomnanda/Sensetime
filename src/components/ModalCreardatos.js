import React/*, { useContext }*/ from 'react';
//import { Context } from '../store/appContext';

const Creardatos = props => {
    //const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div>
                            <div className="text-center mr-3">
                                <i className="fa fa-book fa-2x text-muted align-bottom" data-toggle="modal" data-target="#nuevocurso"></i>
                                <p className="modalsp text-muted">Crear nuevo CURSO</p>
                            </div>
                        </div>
                        <div className="text-center mr-3">
                            <i className="far fa fa-building fa-2x text-muted align-bottom" data-toggle="modal" data-target="#nuevasede"></i>
                            <p className="modalsp text-muted">Crear nueva SEDE</p>
                        </div>
                        <div className="text-center mr-3">
                            <i className="fa fa-user fa-2x text-muted align-bottom" data-toggle="modal" data-target="#nuevoprofesor"></i>
                            <p className="modalsp text-muted">Crear nuevo PROFESOR</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Creardatos;