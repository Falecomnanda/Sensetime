import React,{ useContext } from 'react';
import { Context } from '../store/appContext';

const ModalUser = props => {
    const { store/*, actions*/ } = useContext(Context);
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
                            <label className="d-block text-success"></label>
                            {store.cursos.length > 0 &&
                                store.cursos.map((item, i) => {
                                    return (<option key={i}>{}</option>)
                                })}
                            <label className="d-block text-dark">Reservar este curso?</label>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <button type="button" className="btn btn-success mr-1" /*OnClick = {actions.setReserva(details_curso_id)}*/>Reservar</button>
                        <button type="button" className="btn btn-danger">Cancelar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUser;