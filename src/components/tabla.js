import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Tabla = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex">
                    <div className="row">
                        {store.details_cursos.length > 0 &&
                            store.details_cursos.map((item, i) => {
                                return (
                                    <div className="col-md-12 mt-10 border rounded" key={i}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img id="Yoga III" src="yoga2.jpg" width="200" alt="" />

                                            </div>
                                            <div className="col-md-3 my-auto">
                                                <h3 className="text-50">{item.curso.curso}</h3>
                                            </div>
                                            <div className="col-md-3 my-auto">

                                                <p className="text-justify">{item.text}{item.fecha}{item.hora}</p>

                                            </div>
                                            <div className="col-md-3 my-auto text-right">
                                                <button type="button" className="btn btn-light mr-2" onClick={(e) => actions.postReserva(item.id)}>Reservar</button>
                                                <button type="button" className="btn btn-light mr-2" onClick={(e) => actions.deleteDetailsCursos(item.id)}>Eliminar Curso</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tabla;
