const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            path: 'http://localhost:5000',
            username: '',
            password: '',
            email:'',
            currentUser: {},
            login: "/login",
            calendarEvent: "user",
            sedeAdminIndex: "",
            profesorAdminIndex: "",
            cursoAdminIndex: "",
            sedeAdminText: "",
            profesorAdminText: "",
            cursoAdminText: "Curso",
            cursos: [
                { id: 1, curso: "YOGA I" },
                { id: 2, curso: "YOGA II" },
                { id: 3, curso: "MASAJE" },
                { id: 4, curso: "PELUQUERÍA" },
                { id: 5, curso: "YOGA IV" },
            ],
            details_cursos: [
                { id: 1, curso_id: 1, sede_id: 1, cupos: 10, profesor: { id: 1, profesor: "JASSAN" }, fecha: "01-02-2020", Hora: "9:00 - 10:00", curso: { id: 3, curso: "MASAJE" }, sede: { id: 1, sede: "PROVIDENCIA" }},
                { id: 2, curso_id: 2, sede_id: 1, cupos: 10, profesor: { id: 2, profesor: "FERNANDA" }, fecha: "02-02-2020", Hora: "10:00 - 11:00", curso: { id: 3, curso: "MASAJE" }, sede: { id: 3, sede: "LA FLORIDA" }},
                { id: 3, curso_id: 3, sede_id: 2, cupos: 10, profesor: { id: 1, profesor: "JASSAN" }, fecha: "03-02-2020", Hora: "11:00 - 12:00", curso: { id: 3, curso: "MASAJE" }, sede: { id: 4, sede: "ÑUÑOA" }},
                { id: 4, curso_id: 4, sede_id: 2, cupos: 10, profesor: { id: 3, profesor: "SEBASTIÁN" }, fecha: "04-02-2020", Hora: "9:00 - 10:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 2, sede: "LAS CONDES" }},
                { id: 5, curso_id: 1, sede_id: 4, cupos: 10, profesor: { id: 2, profesor: "FERNANDA" }, fecha: "02-02-2020", Hora: "12:00 - 13:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" }},
                { id: 6, curso_id: 2, sede_id: 4, cupos: 10, profesor: { id: 3, profesor: "SEBASTIÁN" }, fecha: "03-02-2020", Hora: "13:00 - 14:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" }},
                { id: 7, curso_id: 3, sede_id: 1, cupos: 10, profesor: { id: 3, profesor: "SEBASTIÁN" }, fecha: "04-02-2020", Hora: "18:00 - 19:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 3, sede: "LA FLORIDA" }},
                { id: 8, curso_id: 4, sede_id: 2, cupos: 10, profesor: { id: 1, profesor: "JASSAN" }, fecha: "06-02-2020", Hora: "18:00 - 19:00", curso: { id: 4, curso: "PELUQUERÍA" }, sede: { id: 4, sede: "ÑUÑOA" }},
                { id: 9, curso_id: 1, sede_id: 2, cupos: 10, profesor: { id: 2, profesor: "FERNANDA" }, fecha: "07-02-2020", Hora: "9:00 - 10:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" }},
                { id: 10, curso_id: 2, sede_id: 2, cupos: 10, profesor: { id: 1, profesor: "JASSAN" }, fecha: "07-02-2020", Hora: "11:00 - 12:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 2, sede: "LAS CONDES" }},
                { id: 11, curso_id: 3, sede_id: 2, cupos: 10, profesor: { id: 1, profesor: "JASSAN" }, fecha: "08-02-2020", Hora: "17:00 - 18:00", curso: { id: 1, curso: "YOGA I" }, sede: { id: 1, sede: "PROVIDENCIA" }}
            ],
            sedes: [
                { id: 1, sede: "PROVIDENCIA" },
                { id: 2, sede: "LAS CONDES" },
                { id: 3, sede: "LA FLORIDA" },
                { id: 4, sede: "ÑUÑOA" },
            ],
            profesores: [
                { id: 1, profesor: "JASSAN" },
                { id: 2, profesor: "FERNANDA" },
                { id: 3, profesor: "SEBASTIÁN" },
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
            setSignup:(history) => {
                const store = getStore();
                const data = {
                    username: store.username,
                    password: store.password,
                    email: store.email,
                }
                fetch(store.path + '/register', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': 'Bearer ' + getStore().currentUser.access_token
                    }
                })
                .then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setStore({
                        username: '',
                        password: '',
                        email: '',
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