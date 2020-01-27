import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Eliminar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="modal fade" id="ModalEliminar" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="card">
                    <div className="card-header">
                        Eliminar Curso
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group card-body">
                            <select name="" className="form-control">
                                <option value="">Seleccione el curso que desea eliminar</option>
                            </select>
                    </div>
                    <div className="card-header">
                        Eliminar Sede
                    </div>
                    <div className="form-group card-body">
                            <select name="" className="form-control">
                                <option value="">Seleccione la sede que desea eliminar</option>
                            </select>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eliminar;