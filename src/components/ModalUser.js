import React/*, { useContext }*/ from 'react';
//import { Context } from '../store/appContext';

const ModalUser = props => {
    //const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="ModalUser" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        User
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group modal-body text-center">
                                    <label className="d-block text-success">Cupos: 10 Disponibles</label>    
                                    <label className="d-block text-dark">SIN RESERVAR</label>             
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-success mr-1">Reservar</button>
                            <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUser;