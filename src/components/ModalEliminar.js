import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Eliminar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="ModalEliminar" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        Eliminar Curso
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group modal-body">
                        <select name="" className="form-control">
                            <option value="">Seleccione el curso que desea eliminar</option>
                            {!!store.cursos.length > 0 &&
                                store.cursos.map((item, i) => {
                                    return (<option key={i}>{item.curso} - {item.sede} ({item.cupos})</option>)                                
                                })
                            }
                        </select>
                    </div>
                    <div className="modal-footer d-flex justify-content-end  border-bottom">           
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Eliminar</button>
                    </div>
                    <div className="modal-header">
                        Eliminar Sede
                    </div>
                    <div className="form-group modal-body">
                        <select name="" className="form-control">
                            <option value="">Seleccione la sede que desea eliminar</option>
                            {!!store.sedes.length > 0 &&
                                store.sedes.map((item, i) => {
                                    //console.log(item)
                                    return (<option key={i}>{item.sede}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">           
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eliminar;