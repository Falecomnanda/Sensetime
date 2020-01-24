import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Calendar from 'react-calendar';


class BaseCalendar extends React.Component {
    state = {
        date: new Date(2020, 0, 1),
    }

    onChange = date => this.setState({ date })

    render() {
        return (
            <div className="container-fluid">
                <div className="row pt-5">
                    <div className="col-lg-3 col-12 d-flex justify-content-center">
                        <Calendar
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>
                    <div className="col-lg-9 col-12 d-flex justify-content-center">
                        <div class="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
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
                                <tr>
                                    <td>8:00 - 9:00</td>
                                    <td></td>
                                    <td></td>
                                    <td>YOGA III</td>
                                    <td></td>
                                    <td></td>
                                    <td>YOGA I</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>9:00 - 10:00</td>
                                    <td>YOGA II</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>10:00 - 11:00</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>YOGA I</td>
                                </tr>  
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default BaseCalendar;