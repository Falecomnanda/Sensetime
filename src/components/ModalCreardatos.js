import React, { useContext } from 'react';
import { Context } from '../store/appContext';




const Creardatos = props => {
    const { store, actions } = useContext(Context);
    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="Creardatos">Crear Datos</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="form-group card-body">
                        <label className="mt-1">Nuevo Curso</label>
                        <input type="text" className="form-control" />
                        <label className="mt-2">Nueva Sede</label>
                        <input type="text" className="form-control" />
                        <label className="mt-2">Número disponible de cupos</label>
                        <select className="form-control">
                            <option className="" value="">Cupos</option>
                            <option className="" value="">0</option>
                            <option className="" value="">1</option>
                            <option className="" value="">2</option>
                            <option className="" value="">3</option>
                            <option className="" value="">4</option>
                            <option className="" value="">5</option>
                            <option className="" value="">6</option>
                            <option className="" value="">7</option>
                            <option className="" value="">8</option>
                            <option className="" value="">10</option>
                            <option className="" value="">11</option>
                            <option className="" value="">12</option>
                            <option className="" value="">13</option>
                            <option className="" value="">14</option>
                            <option className="" value="">15</option>
                            <option className="" value="">16</option>
                            <option className="" value="">17</option>
                            <option className="" value="">18</option>
                            <option className="" value="">19</option>
                            <option className="" value="">20</option>
                            <option className="" value="">21</option>
                            <option className="" value="">22</option>
                            <option className="" value="">23</option>
                            <option className="" value="">24</option>
                            <option className="" value="">25</option>
                        </select>
                    </div>
                    <div className="modal-footer d-flex justify-content-end">
                        <div className="d-flex justify-content-start">
                            <button type="button" className="btn btn-dark mr-1" data-dismiss="modal">Volver</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Creardatos;