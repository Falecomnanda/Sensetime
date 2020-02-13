const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            lista: "",
            ///////////Fetch Login and Signup///////////////////
            path: 'http://localhost:5000',
            msg: '',
            aviso: '',
            username: '',
            password: '',
            phone: '',
            fullname: '',
            currentUser: {},
            ///////////Manejo de calendario///////////////////
            login: "/login",
            calendarEvent: "user",
            curso_id: '',
            sede_id: '',
            profesor_id: '',
        

            filter_curso_id: '',
            filter_sede_id: '',
            filter_profesor_id: '',

            alerta:'',
            text: '',
            telefono: '',
            rut: '',
            email: '',
            fecha: '',
            hora: '',
            sedeAdmin: "",
            sedeUser: "",
            selectedSede: null,
            details_cursos: [
                {id:1, curso: "curso_id", sede: "sede_id", profesor: "profesor_id"}
            ],

            time_cursos: [
                { id: 1, fecha: 'date', hora: 'time' }
            ],
            calendario: [
                { hora: "12:00 - 13:00", lunes: "", martes: "martes", miercoles: "miercoles", jueves: "jueves", viernes: "viernes", sabado: "sabado", domingo: "domingo" },
                { hora: "13:00 - 14:00", lunes: "", martes: "martes", miercoles: "miercoles", jueves: "jueves", viernes: "viernes", sabado: "sabado", domingo: "domingo" },
                { hora: "14:00 - 15:00", lunes: "", martes: "martes", miercoles: "miercoles", jueves: "jueves", viernes: "viernes", sabado: "sabado", domingo: "domingo" },
                { hora: "15:00 - 16:00", lunes: "", martes: "martes", miercoles: "miercoles", jueves: "jueves", viernes: "viernes", sabado: "sabado", domingo: "domingo" },
                { hora: "16:00 - 17:00", lunes: "", martes: "martes", miercoles: "miercoles", jueves: "jueves", viernes: "viernes", sabado: "sabado", domingo: "domingo" },
                { hora: "17:00 - 18:00", lunes: "", martes: "martes", miercoles: "miercoles", jueves: "jueves", viernes: "viernes", sabado: "sabado", domingo: "domingo" },
            ],
            cursos: [
                { id: 1, curso: "YOGA I" },
                { id: 2, curso: "YOGA II" },
                { id: 3, curso: "YOGA III" },
                { id: 4, curso: "YOGA IV" },
                { id: 5, curso: "YOGA V" },
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
                { id: 6, profesor: "FERNANDA" },

            ],

            reservas: [
                { id: 1, details_cursos_id: 1, user_id: 1 },
                { id: 2, details_cursos_id: 2, user_id: 1 },
            ]

        },
        actions: {
            borrarAlert: () => {
                setStore({
                    alerta: ''
                })
            },
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
                else if (ide.target.id === "sedeuser") {
                    setStore({ sedeUser: text })
                }
                else if (ide.target.id === "selectProfesorAdmin") {
                    setStore({ profesorAdminText: text })
                }
            },
            setSede: sede_id => {
                setStore({
                    selectedSede: sede_id === "" ? null : sede_id
                })
            },
            setCurso: curso_id => {
                setStore({
                    selectedCurso: curso_id === "" ? null : curso_id
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
                        if (data.msg) {
                            history.push('/login')
                        }
                        else if (getStore().username === 'admin' && getStore().password === '123') {
                            history.push('/calendarAdmin')
                        }
                        else {
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

            //CURSOS//
            getCursos: () => {
                const store = getStore();
                fetch(store.path + '/api/cursos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            cursos: data,
                        });
                    })

            },

            postCurso: () => {
                const store = getStore();
                const data = {
                    curso: store.curso,
                }
                fetch(store.path + '/api/cursos', {
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
                            cursos: data,

                        });
                        getActions().getCursos();
                    })

            },


            putCurso: id => {
                const store = getStore();
                const data = {
                    curso: store.curso,
                }
                fetch(store.path + '/api/cursos/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            cursos: data,

                        });
                    })

            },


            deleteCurso: id => {
                const store = getStore();
                fetch(store.path + '/api/cursos/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getCursos();
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });

            },

            //SEDES//
            getSede: () => {
                const store = getStore();
                fetch(store.path + '/api/sedes', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            sedes: data,

                        });
                    })

            },

            postSede: () => {
                const store = getStore();
                const data = {
                    sede: store.sede,
                }
                fetch(store.path + '/api/sedes', {
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
                            sedes: data,

                        });
                        getActions().getSede();
                    })

            },


            putSede: id => {
                const store = getStore();
                const data = {
                    sede: store.sede,
                }
                fetch(store.path + '/api/sedes/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            sedes: data,

                        });
                    })

            },


            deleteSede: id => {
                const store = getStore();
                fetch(store.path + '/api/sedes/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getSede();
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });

            },

            //Profesores//
            getProfesor: () => {
                const store = getStore();
                fetch(store.path + '/api/profesores', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            profesores: data,

                        });
                    })

            },

            postProfesor: () => {
                const store = getStore();
                const data = {
                    profesor: store.profesor,
                    telefono: store.telefono,
                    rut: store.rut,
                    email: store.email
                }
                fetch(store.path + '/api/profesores', {
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
                            profesores: data,
                            telefono: '',
                            rut: '',
                            email: '',

                        });
                        getActions().getProfesor();
                    })

            },


            putProfesor: id => {
                const store = getStore();
                const data = {
                    profesor: store.profesor,
                }
                fetch(store.path + '/api/profesores' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            profesores: data,
                            telefono: '',
                            rut: '',
                            email: '',

                        });
                    })

            },


            deleteProfesor: id => {
                const store = getStore();
                fetch(store.path + '/api/profesores/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getProfesor();
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });

            },


            //Horarios///////////////////////////////////
            getDetailsCursos: () => {
                const store = getStore();
                fetch(store.path + '/api/detailscursos', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            details_cursos: data,
                        });
                    })

            },

            postDetailscursos: () => {
                console.log("aqui")
                const store = getStore();
                const data = {
                    curso_id: store.curso_id,
                    sede_id: store.sede_id,
                    profesor_id: store.profesor_id,
                    fecha: store.fecha,
                    hora: store.hora,
                    text: store.text
                }
                console.log(data);
                fetch(store.path + '/api/detailscursos', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getDetailsCursos();
                        setStore({
                            alerta: "Curso Guardado"
                        })
                        
                    })

            },

            putDetailscursos: id => {
                const store = getStore();
                const data = {
                    curso_id: store.curso_id,
                    sede_id: store.sede_id,
                    profesor_id: store.profesor_id,
                    fecha: store.fecha,
                    hora: store.hora,
                    text: store.text
                }
                fetch(store.path + '/api/detailscursos/' + id, {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            curso: data,
                            sede: data,
                            profesor: data,
                            text: data,
                            fecha: '',
                            hora: ''

                        });
                    })

            },


            deleteDetailsCursos: id => {
                const store = getStore();
                fetch(store.path + '/api/detailscursos/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getDetailsCursos();
                        setStore({
                            alerta: "Curso Eliminado"
                        })
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });

            },

            //Reservas
            getReserva: () => {
            const store = getStore();
                fetch(store.path + '/api/reservas', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        setStore({
                            details_cursos: data,
                            user_id: data,
                            
                        });
                    })

            },


            postReserva: (detailscurso_id,user_id) => {
                const store = getStore();
                const data = {
                    detailscurso_id: detailscurso_id,
                    user_id: (store.currentUser.user != null ? store.currentUser.user.id : 1)
                }
                fetch(store.path + '/api/reservas', {
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
                            alerta: "Curso Reservado"
                        });
                    })
            },

            deleteReservas: id => {
                const store = getStore();
                fetch(store.path + '/api/reservas/' + id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getReservas();
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });

            },

            getFilter: () => {
                const store = getStore();
                const data = {
                    sede_id: store.filter_sede_id,
                    profesor_id: store.filter_profesor_id,
                    curso_id: store.filter_curso_id
                }
                fetch(store.path + '/api/filter', {
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
                            details_cursos: data,
                        });
                    })
            },

            deleteFilter: (id) => {
                const store = getStore();
                fetch(store.path + '/api/filter/'+id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data)
                        getActions().getFilter();
                    })
            },


        }
    }
}

export default getState;