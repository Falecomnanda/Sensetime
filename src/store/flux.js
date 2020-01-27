const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            login: "/login",
            calendarEvent: "user",
            SedeAdmin: "",
            cursos: [{ curso: "YOGA I", sede: "PROVIDENCIA", cupos: 10, profesor: "FERNANDA" },
            { curso: "YOGA II", sede: "PROVIDENCIA", cupos: 10, profesor: "JASSAN"},
            { curso: "MASAJE", sede: "LAS CONDES", cupos: 10, profesor: "FERNANDA"},
            { curso: "PELUQUERÍA", sede: "LAS CONDES", cupos: 10, profesor: "SEBASTIÁN"},
            { curso: "YOGA IV", sede: "LA FLORIDA", cupos: 10, profesor: "FERNANDA"},
            { curso: "YOGA I", sede: "LAS CONDES", cupos: 10, profesor: "SEBASTIÁN"}
            ],
            sedes: [{ sede: "PROVIDENCIA" },
            { sede: "LAS CONDES" },
            { sede: "ÑUÑOA" },
            { sede: "LA FLORIDA" },
            ],
            profesores: [{ profesor: "JASSAN" },
            { profesor: "FERNANDA" },
            { profesor: "SEBASTIÁN" },
            ],
        },
        actions: {
            go: user => {
                //console.log(user)
                if (user === "admin") {
                    setStore({ login: "/calendaradmin" })
                    setStore({ calendarEvent: "" })
                }
                else if (user === "user") {
                    setStore({ login: "/calendar" })
                    setStore({ calendarEvent: "#ModalUser" })
                }
                else {
                    setStore({ login: "/login" })
                }
            },
            subadmin: (ide) => {
                let sel = document.getElementById(ide.target.id)
                let text = sel.options[sel.selectedIndex].text
                //console.log(text)
                setStore({ sedeAdmin: text })
            }
        }
    }
}

export default getState;