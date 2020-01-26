import React, { useContext } from 'react';
import { Context } from '../store/appContext';



const SubirFoto = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="modal fade" id="ModalSubirFoto" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalModificar">Subir nueva foto</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group card-body">
                            <label className="mt-1">Seleccione una nueva imagen</label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-success mr-1">Subir</button>
                            <button type="button" className="btn btn-dark mr-1" data-dismiss="modal">Volver</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubirFoto;