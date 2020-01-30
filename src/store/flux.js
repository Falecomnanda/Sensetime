const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            msg:'',
            aviso:'',
            username: '',
            password: '',
            phone:'',
            fullname:'',
            currentUser: {},
            login: "/login",
            calendarEvent: "user",
            fechas: '',
            sedeAdmin: "",
            selectedSede: null,
            details_cursos: [
                { id: 1, curso_id: 1, sede_id: 1, cupos: 10, profesor_id: 1, fecha: "01-02-2020", Hora: "9:00 - 10:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 2, curso_id: 2, sede_id: 1, cupos: 10, profesor_id: 2, fecha: "02-02-2020", Hora: "10:00 - 11:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 3, curso_id: 3, sede_id: 2, cupos: 10, profesor_id: 3, fecha: "03-02-2020", Hora: "11:00 - 12:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 4, curso_id: 4, sede_id: 2, cupos: 10, profesor_id: 4, fecha: "04-02-2020", Hora: "9:00 - 10:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 5, curso_id: 1, sede_id: 4, cupos: 10, profesor_id: 5, fecha: "02-02-2020", Hora: "12:00 - 13:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 6, curso_id: 2, sede_id: 4, cupos: 10, profesor_id: 6, fecha: "03-02-2020", Hora: "13:00 - 14:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 7, curso_id: 3, sede_id: 1, cupos: 10, profesor_id: 1, fecha: "04-02-2020", Hora: "18:00 - 19:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 8, curso_id: 4, sede_id: 2, cupos: 10, profesor_id: 2, fecha: "06-02-2020", Hora: "18:00 - 19:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 9, curso_id: 1, sede_id: 2, cupos: 10, profesor_id: 3, fecha: "07-02-2020", Hora: "9:00 - 10:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 10, curso_id: 2, sede_id: 2, cupos: 10, profesor_id: 4, fecha: "07-02-2020", Hora: "11:00 - 12:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } },
                { id: 11, curso_id: 3, sede_id: 2, cupos: 10, profesor_id: 5, fecha: "08-02-2020", Hora: "17:00 - 18:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" } }
            ],
            cursos: [
                { id: 1, curso: "YOGA I" },
                { id: 2, curso: "YOGA II" },
                { id: 3, curso: "YOGA III" },
                { id: 4, curso: "YOGA IV" },
            ],

            sedes: [
                { id: 1, sede: "PROVIDENCIA" },
                { id: 2, sede: "LAS CONDES" },
                { id: 3, sede: "ÑUÑOA" },
                { id: 4, sede: "LA FLORIDA" }
            ],
            profesores: [
                { id: 1, profesor: "JASSAN" },
                { id: 2, profesor: "FLAVIO" },
                { id: 3, profesor: "SEBASTIÁN C." },
                { id: 4, profesor: "JUANA" },
                { id: 5, profesor: "FRANCISCA" },
                { id: 6, profesor: "FERNANDA" }
            ],
            reservas: [
                { id: 1, detailcurso_id: 1, user_id: 1, fecha: 1 },
                { id: 2, detailcurso_id: 2, user_id: 3, fecha: 2 },
                { id: 3, detailcurso_id: 1, user_id: 4, fecha: 3 },
            ],
        },
        actions: {
            subadmin: (ide) => {
                let sel = document.getElementById(ide.target.id)
                let text = sel.options[sel.selectedIndex].text
                let i = sel.selectedIndex
                if (ide.target.id === "selectSedeAdmin") {
                    setStore({ sedeAdminIndex: i })
                    setStore({ sedeAdminText: text })
                }
                else if (ide.target.id === "selectCursoAdmin") {
                    setStore({ cursoAdminIndex: i })
                    setStore({ cursoAdminText: text })
                }
                else if (ide.target.id === "selectProfesorAdmin") {
                    setStore({ profesorAdminText: text })
                }
            },
            subadmin: ide => {
                let sel = document.getElementById(ide.target.id)
                let text = sel.options[sel.selectedIndex].text
                //console.log(text)
                if (ide.target.id === "sedeuser") {
                    setStore({ sedeUser: text })
                }
            },
            setSede: sede_id => {
                setStore({
                    selectedSede: sede_id == "" ? null : sede_id
                })
            },
            setCurso: curso_id => {
                setStore({
                    selectedCurso: curso_id == "" ? null : curso_id
                })
            },
            setReserva: detail_cursos_id => {
                alert('Reserva efectuada')
            },

            setSignup: (history) => {
                const store = getStore();
                const data = {
                    username: store.username,
                    fullname: store.fullname,
                    phone: store.phone,
                    password: store.password,
                }
                fetch(store.path + '/register', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setStore({
                        username: '',
                        fullname: '',
                        phone: '',
                        password: '',
                        currentUser: data
                    });
                    history.push('/login')
                })
            },
            getLogin: (history) => {
                const store = getStore();
                const data = {
                    username: store.username,
                    password: store.password,
                }
                fetch(store.path + '/login', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data.msg)
                    if(data.msg){
                        history.push('/login')
                    }
                    else{
                        history.push('/calendar') 
                    }
                    setStore({
                        username: '',
                        password: '',
                        currentUser: data
                    });  
                })
            },
            handleChange: e => {
                setStore({ [e.target.name]: e.target.value })
            },
        }
    }
}
export default getState;
