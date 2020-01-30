import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Calendar from 'react-calendar';
import ModalUser from '../components/ModalUser';
import ReactDOM from 'react-dom';


class BaseCalendar extends React.Component {
    state = {
        date: new Date(),

    }
    onChange = date => this.setState({ date })
    getDay = date => {
        alert('Clicked day: ', date.toString());
        let a = new Date(date);
        console.log(a);
        console.log(this.LunesOfWeek(a));
        console.log(this.SemanaOfWeek(a+1));
        console.log(this.SundayOfWeek(a));
    }

    LunesOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }
    SundayOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 6));
    }
    SemanaOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 6));
    }

    render() {
        return (
            <Context.Consumer>
                {
                    ({ store, actions }) => {
                        return (
                            <div className="container-fluid">
                                <div className="row pt-5">
                                    <div className="col-lg-3 col-12 d-flex justify-content-center">
                                        <Calendar
                                            onChange={this.onChange}
                                            value={this.state.date}
                                            onClickDay={this.getDay}
                                        />
                                    </div>
                                    <div className="col-lg-9 col-12 d-flex justify-content-center">
                                        <div class="table-responsive">
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
                                                        <td className="d-flex justify-content-center"><div>
                                                            <button className="d-block btn" data-toggle="modal" data-target={this.state.date} onChange={(e) => actions.setSede(e.target.value)}>YOGA III</button>
                                                            <button className="d-block btn" data-toggle="modal" data-target={store.calendarEvent} onChange={(e) => actions.setSede(e.target.value)}>YOGA I</button>
                                                        </div>
                                                        </td>
                                                        <option value=""></option>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td className="d-flex justify-content-center"><div>
                                                            <button className="d-block btn" data-toggle="modal" data-target={store.calendarEvent}>YOGA I</button></div></td>
                                                        <option value=""></option>
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
                                                    <tr className="text-center">
                                                        <td>11:00 - 12:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>12:00 - 13:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>13:00 - 14:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>14:00 - 15:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>15:00 - 16:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>16:00 - 17:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr className="text-center">
                                                        <td>17:00 - 18:00</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>
                                                    {!!store.cursos.length > 0 &&
                                                        store.cursos.map((item, i) => {
                                                            if (store.sedes !== null && store.cursos !== null)
                                                                if (store.sedes == item.sede_id && store.cursos == item.curso_id) {
                                                                    return (item)
                                                                }
                                                            if (store.sedes !== null && store.curso === null)
                                                                return (item.sede_id)

                                                            if (store.sedes === null && store.cursos !== null)
                                                                return (item.cursos_id)
                                                        })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <ModalUser />
                            </div>
                        )
                    }
                }
            </Context.Consumer>
        )
    }

}

export default BaseCalendar;