import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const NuevoProfesor = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="nuevoprofesor" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        Crear un nuevo profesor
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group modal-body">
                            <input type="text" id="profesor1" name="profesor" className="form-control" onChange={e => actions.handleChange(e)} placeholder="Ingrese nombre completo del nuevo profesor" />
                            <input type="text" id="profesor2" name="telefono" className="form-control mt-1" onChange={e => actions.handleChange(e)} placeholder="Ingrese el teléfono" />
                            <input type="text" id="profesor3" name="rut" className="form-control mt-1" onChange={e => actions.handleChange(e)} placeholder="Ingrese el rut" />
                            <input type="text" id="profesor4" name="email" className="form-control mt-1" onChange={e => actions.handleChange(e)} placeholder="Ingrese el email" />
                            <div className="modal-footer d-flex justify-content-end">
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => actions.postProfesor()}>Salvar</button>
                            </div>
                        </div>
                        <div className="form-group modal-body">
                            <h5 value="">Listado de profesores actualizado</h5>
                            <ul className="list-group display-inline-block">
                                {store.profesores.length > 0 &&
                                    store.profesores.map((item, i) => {
                                        return (
                                            <li className="list-group-item d-flex justify-content-between" key={i}>{item.profesor}
                                                <div className="display-inline">
                                                    {/* <i className="fas fa-pen mr-1" onKeyDown={e => actions.evento(e)}></i> */}
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


export default NuevoProfesor;