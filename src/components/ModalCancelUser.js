import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const ModalCancelUser = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="ModalUser" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        User
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <h2>Eliminar curso?</h2>
                        <button type="button" className="btn btn-success mr-1" onclick="myFunction()"></button>
                        <script>
                            function myFunction() {
                                alert('Curso Eliminado')
                        }
                        </script>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalCancelUser;