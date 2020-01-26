import React, { useContext } from 'react';
import { Context } from '../store/appContext';



const Eliminar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div class="modal fade" id="ModalEliminar" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalEliminar">Eliminar Datos</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div>
                        <div className="form-group card-body">
                            <label className="mt-1">Todos los cursos</label>
                            <select className="form-control">
                                <option className="" value="">Cursos</option>
                                <option className="" value="">Yoga I</option>
                                <option className="" value="">Yoga II</option>
                                <option className="" value="">Yoga III</option>
                                <option className="" value="">Pilates</option>
                                <option className="" value="">Hot Pilates</option>
                                <option className="" value="">Bikram</option>
                                <option className="" value="">Masaje Relax</option>
                                <option className="" value="">Baile</option>
                            </select>
                            <div>
                                <div className="modal-footer d-flex justify-content-end">
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                            <label className="mt-1">Todas las sedes</label>
                            <select className="form-control">
                                <option className="" value="">Sedes</option>
                                <option className="" value="">Providencia</option>
                                <option className="" value="">Las Condes</option>
                                <option className="" value="">Vitacura</option>
                                <option className="" value="">Nuñoa</option>
                                <option className="" value="">La Florida</option>
                            </select>
                            <div>
                                <div className="modal-footer d-flex justify-content-end">
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                            <label className="mt-1">Profesores</label>
                            <select className="form-control">
                                <option className="" value="">Profesores</option>
                                <option className="" value="">Juan</option>
                                <option className="" value="">Roberta</option>
                                <option className="" value="">Andrea V.</option>
                                <option className="" value="">Guillherme</option>
                                <option className="" value="">Rosario</option>
                                <option className="" value="">Emiliana</option>
                                <option className="" value="">Gustavo R.</option>
                            </select>
                            <div>
                                <div className="modal-footer d-flex justify-content-end">
                                    <div className="d-flex justify-content-start">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-dark mr-1" data-dismiss="modal">Volver</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Deletar Todos</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eliminar;