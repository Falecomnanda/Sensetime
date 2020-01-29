import React/*, { useContext }*/ from 'react';
//import { Context } from '../store/appContext';

const SubirFoto = props => {
    //const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="ModalSubirFoto" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modalModificar">Cambiar logo</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group modal-body">
                            <div className="d-flex justify-content-center">
                                <img src="https://www.segundomedico.com/wp-content/uploads/2016/08/yoga-logo-e1472239462150.png" alt="Logo" width="100" />
                            </div>
                            <div className="d-flex justify-content-center pt-3">
                                <input className="" type="file"/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-success mr-1">Subir</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SubirFoto;