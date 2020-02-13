import React, { useContext } from 'react';
import { Context } from '../store/appContext';


const TablaUser = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <div className="row">
                <div className="list-group mt-5">
                    {store.details_cursos.length > 0 &&
                        store.details_cursos.map((item, i) => {
                            return (
                                <a href="#" className="list-group-item list-group-item-action" key={i}>
                                    <div className="d-flex w-100 justify-content">
                                        <img id= "Yoga III" src="yoga2.jpg" width="200" alt="" />
                                        <h3>{item.curso.curso}</h3>
                                        <p id="medida">{item.text}{item.fecha}{item.hora}
                                        </p>
                                        <button type="button" className="btn btn-light" onClick={(e) => actions.postReserva(item.id)}>Reservar</button>
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
