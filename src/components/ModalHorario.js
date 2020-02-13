import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Horario = props => {
    const { store, actions } = useContext(Context);

    return (
        <div className="modal fade" id="nuevohorario" tabIndex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        Crear una fecha y horario
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        {/* </div>
                    {/* <div className="form-group modal-body">
                        <input type="text" id="horario" name="horario" className="form-control { item.data | date:'d/m/Y' }" onChange={e => actions.handleChange(e)} placeholder="Ingrese data" />
                        <div className="modal-footer d-flex justify-content-end">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(e) => actions.postHorario()}>Salvar</button>
                        </div> */}
                    </div>
                    <div>
                        <div className="form-group modal-body">
                            <h5 value="">Fecha del curso</h5>
                            <label for="date">Start date:</label>
                            <input type="date" id="date" name="date"
                                value="2020-01-01"
                                min="2019-01-01" max="2025-12-31" />
                        <div>
                            <h5 value="">Horario del curso</h5>
                            <label for="time"> Elija horario: </label>
                            <input type="time" id="time" name="time" min="09:00" max="18:00" required />
                            <p>Nuestras oficinas funcionan hasta las 18hs</p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>        
    )
}
export default Horario;