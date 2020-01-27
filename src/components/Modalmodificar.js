import React, { useContext } from 'react';
import { Context } from '../store/appContext';



const Modificar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="modal fade" id="ModalModificar" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="card">
                    <div className="form-group card-header">
                        Nuevo Nombre
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group card-body">
                        <select name="" className="form-control">
                            <option value="">Seleccione el curso que desea modificar</option>
                        </select>
                        <input type="text" className="form-control mt-3" placeholder="Nuevo Nombre" />
                        <input type="text" className="form-control mt-3" placeholder="Nueva Sede" />
                        <input type="text" className="form-control mt-3" placeholder="Nuevo Cupo" />
                    </div>
                    <div className="form-group card-header border-top">
                        Modificar Sede
                        </div>
                    <div className="form-group card-body">
                        <select name="" className="form-control">
                            <option value="">Seleccione la sede que desea modificar</option>
                        </select>
                        <input type="text" className="form-control mt-3" placeholder="Nueva Sede" />
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modificar;