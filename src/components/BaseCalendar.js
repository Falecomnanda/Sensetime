import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Calendar from 'react-calendar';
import ModalUser from '../components/ModalUser';


const BaseCalendar = props => {
        const { store/*, actions */} = useContext(Context);
        return (
            <div className="container-fluid">
                <div className="row pt-2">
                    <div className="col-lg-3 col-12 d-flex justify-content-center">
                        <Calendar />
                    </div>
                    <div className="col-lg-9 col-12 d-flex justify-content-center">
                        <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Horarios</th>
                                    <th scope="col">Lunes</th>
                                    <th scope="col">Martes</th>
                                    <th scope="col">Miércoles</th>
                                    <th scope="col">Jueves</th>
                                    <th scope="col">Viernes</th>
                                    <th scope="col">Sábado</th>
                                    <th scope="col">Domingo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td>8:00 - 9:00</td>
                                    <td className="d-flex justify-content-center"><div><button className="d-block btn" data-toggle="modal" data-target={store.calendarEvent}>YOGA III</button><button className="d-block btn" data-toggle="modal" data-target={store.calendarEvent}>YOGA I</button></div></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td className="d-flex justify-content-center"><div><button className="d-block btn" data-toggle="modal" data-target={store.calendarEvent}>YOGA I</button></div></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="text-center">
                                    <td>9:00 - 10:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr className="text-center">
                                    <td>10:00 - 11:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>  
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            <ModalUser />
            </div>
        );
}
export default BaseCalendar;