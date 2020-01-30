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
                        Crear Curso
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group modal-body">
                        <input type="text" className="form-control" placeholder="Ingrese nombre del curso" />
                        <input type="text" className="form-control mt-3" placeholder="Ingrese sede del curso" />
                        <input type="number" className="form-control mt-3" placeholder="Ingrese cupo del curso" />
                    </div>
                    <div className="modal-header">
                        Crear Sede
                    </div>
                    <div className="form-group modal-body">
                        <input type="text" className="form-control" placeholder="Ingrese nombre de la sede" />
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Creardatos;