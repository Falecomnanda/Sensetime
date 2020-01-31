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
        console.log(this.MartesOfWeek(a));
        console.log(this.MiercolesOfWeek(a));
        console.log(this.JuevesOfWeek(a));
        console.log(this.ViernesOfWeek(a));
        console.log(this.SabadoOfWeek(a));
        console.log(this.DomingoOfWeek(a));

    }
    LunesOfWeek = (date, x) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
        return new Date(date.setDate(diff));
    }
    DomingoOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 6));
    }
    MartesOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 1));
    }
    MiercolesOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 2));
    }
    JuevesOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 3));
    }
    ViernesOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 4));
    }
    SabadoOfWeek = (date) => {
        let diff = date.getDate() - date.getDay() + (date.getDay() !== 0 ? 1 : -6);
        return new Date(date.setDate(diff + 5));
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
                                                    {!!store.calendario.length > 0 &&
                                                        store.calendario.map((item, i) => {
                                                            return (
                                                            <tr>
                                                                <td className="text-center">{item.horario}</td>
                                                                <td className="text-center">{item.lunes}</td>
                                                                <td className="text-center">{item.martes}</td>
                                                                <td className="text-center">{item.miercoles}</td>
                                                                <td className="text-center">{item.jueves}</td>
                                                                <td className="text-center">{item.viernes}</td>
                                                                <td className="text-center">{item.sabado}</td>
                                                                <td className="text-center">{item.domingo}</td>  
                                                            </tr>

                                                            )
                                                        })
                                                    }

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