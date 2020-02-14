import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const CrearNuevoCurso = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id="nuevocurso" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        Crear un nuevo curso
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group modal-body">
                        <input type="text" id="curso" name="curso" className="form-control" onChange={e => actions.handleChange(e)} placeholder="Ingrese nombre del nuevo curso" />
                        <div className="modal-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => actions.postCurso()}>Salvar</button>
                        </div>
                    </div>
                    <div>
                        <div className="form-group modal-body">
                            <h5 value="">Listado de cursos actualizado</h5>
                            <ul className="list-group">
                                {store.cursos.length > 0 &&
                                    store.cursos.map((item, i) => {
                                        return (
                                            <li className="list-group-item d-flex justify-content-between" key={i}>{item.curso}
                                                <div className="display-inline">
                                                <i className="fas fa-trash mr-1" name = "curso" onClick={(e) => actions.deleteCurso(item.id)}></i>
                                                </div>
                                            </li>
                                        )

                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CrearNuevoCurso;