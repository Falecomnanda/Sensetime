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
        

            filter_curso_id: 0,
            filter_sede_id: 0,
            filter_profesor_id: 0,

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
            details_cursos: [],

            time_cursos: [
                { id: 1, fecha: 'date', hora: 'time' }
            ],
            calendario: [],
            cursos: [],

            sedes: [],

            profesores: [],

            reservas: []

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
                let total = 0;
                total = store.details_cursos.map(item => {
                    if(item.curso_id === id) total++;
                    return total ++
                });
                if(total.length > 0){
                    setStore({
                        alerta: 'Curso tiene sede asociada'
                    })
                }else{
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
                        setStore({
                            alerta: "Curso Apagado"
                        })
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });
                }    

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
                let total = 0;
                total = store.details_cursos.map(item => {
                    if(item.sede_id === id) total++;
                    return total ++
                });
                if(total.length > 0){
                    setStore({
                        alerta: 'Sede tiene curso asociado'
                    })
                }else{
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
                }   

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
                let total = 0;
                total = store.details_cursos.map(item => {
                    if(item.profesor_id === id) total++;
                    return total ++
                });
                if(total.length > 0){
                    setStore({
                        alerta: 'Profesor tiene cursos asociados'
                    })
                }else{
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
                        getActions().getDetailsCursos();
                        //Esto toma as açoes de getActions e actualiza los datos en get
                    });
                }

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

            postFilter: () => {
                const store = getStore();
                const data = {
                    sede_id: store.filter_sede_id,
                    profesor_id: store.filter_profesor_id,
                    curso_id: store.filter_curso_id
                }
                fetch(store.path + '/api/filters', {
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

            // deleterama: (id) => {
            //      const store = getStore();
            //      const data = {
            //         curso_id: store.curso_id,
            //         sede_id: store.sede_id,
            //         profesor_id: store.profesor_id,
            //      }
            //      fetch(store.path + '/api/deleteramas/'+id, {
            //          method: 'GET',
            //          headers: {
            //              'Content-Type': 'application/json',
            //          }
            //      })
            //          .then(resp => resp.json())
            //          .then(data => {
            //              console.log(data)
            //              getActions().getDetailsCursos();
            //          })
            //  },


        }
    }
}

export default getState;