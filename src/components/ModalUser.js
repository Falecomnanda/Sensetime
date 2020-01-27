import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ModalUser = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="modal fade" id="ModalUser" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="card">
                    <div class="card-header">
                        User
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group card-body text-center">
                                    <label class="d-block text-success">Cupos: 10 Disponibles</label>    
                                    <label class="d-block text-dark">SIN RESERVAR</label>             
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-success mr-1">Reservar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUser;