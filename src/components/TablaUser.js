import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const TablaUser = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    {store.details_cursos.length > 0 &&
                        store.details_cursos.map((item, i) => {
                            return (
                                <a href="#" className="list-group-item list-group-item-action" key={i}>
                                    <div className="container mt-10">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img id="Yoga III" src="yoga2.jpg" width="200" alt="" />

                                            </div>
                                            <div className="col-md-4 my-auto">
                                                <h3 className="text-50">{item.curso.curso}</h3>
                                                <p id="medida">{item.text}{item.fecha}{item.hora}</p>

                                            </div>
                                            <div className="col-md-4 my-auto text-right">
                                                <span>
                                                    <button type="button" className="btn btn-light" onClick={(e) => actions.postReserva(item.id)}>Reservar</button>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                
                              )
                        })}         

                </div>
            </div>
        </div>
    )
}

export default TablaUser;
