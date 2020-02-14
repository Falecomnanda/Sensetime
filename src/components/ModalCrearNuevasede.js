import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const CrearNuevaSede = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="nuevasede" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        Crear una nueva Sede
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group modal-body">
                        <input type="text" id="sede" name="sede" className="form-control" onChange={e => actions.handleChange(e)} placeholder="Ingrese el nombre de la nueva sede" />
                        <div className="modal-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => actions.postSede()}>Salvar</button>
                        </div>
                    </div>
                    <div className="form-group modal-body">
                        <h5 value="">Listado de sedes actualizado</h5>
                        <ul className="list-group">
                            {!!store.sedes.length > 0 &&
                                store.sedes.map((item, i) => {
                                    return (
                                        <li className="list-group-item d-flex justify-content-between" key={i}>{item.sede}
                                            <div className="d-inline">
                                            <i className="fas fa-trash mr-1" name="sede" onClick={(e) => actions.deleteSede(item.id)}></i>
                                            </div>
                                        </li>
                                    )

                                })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CrearNuevaSede;