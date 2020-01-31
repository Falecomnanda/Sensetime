import React from 'react'
import { Context } from '../store/appContext'
import Calendar from 'react-calendar';
import ModalUser from '../components/ModalUser';
import Option from '../components/Option';

class BaseCalendar extends React.Component {
    state = {
        date: new Date(),
        lunes: "",
        martes: "",
        miercoles: "",
        jueves: "",
        viernes: "",
        sabado: "",
        domingo: "",
    }
    onChange = date => this.setState({ date })
    getDay = date => {
        let a = new Date(date);
        this.setState({ lunes: this.day(a) })
        /* this.setState({ martes: this.MartesOfWeek(a) })
        this.setState({ miercoles: this.MiercolesOfWeek(a) })
        this.setState({ jueves: this.JuevesOfWeek(a) })
        this.setState({ viernes: this.ViernesOfWeek(a) })
        this.setState({ sabado: this.SabadoOfWeek(a) })
        this.setState({ domingo: this.DomingoOfWeek(a) }) */
    }
    day = date => {
        let day = date.getDate()
        let month = date.getMonth()
        return day+' / '+(month+1)
    } 

    LunesOfWeek = (date) => {
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
                        console.log(this.state.lunes)
                        /* console.log('MARTES: ' + this.state.martes)
                        console.log('MIERCOLES: ' + this.state.miercoles)
                        console.log('JUEVES: ' + this.state.jueves)
                        console.log('VIERNES: ' + this.state.viernes)
                        console.log('SABADO: ' + this.state.sabado)
                        console.log('DOMINGO: ' + this.state.domingo) */
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
                                                        <th scope="col" className="" onClick={actions.inBoton}>Horarios</th>
                                                        <th scope="col">{`Lunes ${this.state.lunes}`}</th>
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
                                                                    <td className="text-center"><select className="form-group" id="prueba"><option className="form-control">Cursos</option><Option selection={item.horario} /></select></td>
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