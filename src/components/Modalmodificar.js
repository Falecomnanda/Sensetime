import React, { useContext } from 'react';
import { Context } from '../store/appContext';



const Modificar = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="ModalModificar" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="form-group modal-header">
                        Montar Cursos
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group modal-body">
                        <h5 value="">Elijas como desea montar su curso</h5>
                        <select className="form-control mt-1 selectpicker" name="sede_id" onChange={(e) => actions.handleChange(e)} >
                            <option value="">Sedes</option>
                            {store.sedes.length > 0 &&
                                store.sedes.map((item, i) => {
                                    return <option data-icon="glyphicon-heart" value={item.id}>{item.sede}</option>
                                })}
                        </select>

                        <select className="form-control mt-1 selectpicker" name="curso_id" onChange={(e) => actions.handleChange(e)} >
                            <option value="">Cursos</option>
                            {store.cursos.length > 0 &&
                                store.cursos.map((item, i) => {
                                    return <option data-icon="glyphicon-heart" value={item.id}>{item.curso}</option>
                                })}
                        </select>

                        <select className="form-control mt-1 selectpicker" name="profesor_id" onChange={(e) => actions.handleChange(e)}>
                            <option data-icon="glyphicon-lamp" selected>Profesores</option>
                            {store.profesores.length > 0 &&
                                store.profesores.map((item, i) => {
                                    return <option key={i} data-icon="glyphicon-heart" value={item.id}>{item.profesor}</option>
                                })}
                        </select>
                        <div className="">
                            <option data-icon="glyphicon-lamp" selected value=""></option>
                            <label for="date"> Fecha  </label>
                            <input type="date" id="date" name="date"
                                min="2019-01-01" max="2025-12-31" onChange={e => actions.handleChange(e)} />

                            <label for="time"> Horario </label>
                            <input type="time" id="time" name="time" min="09:00" max="18:00" onChange={e => actions.handleChange(e)} />

                            <div className="col-12">
                                <label for="texto"> Texto </label>
                                <input className="form-group modal-body d-flex justify-content-end w-100" type="texto" id="texto" name="texto" onChange={e => actions.handleChange(e)} />
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={actions.postDetailscursos}>Salvar</button>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Modificar;