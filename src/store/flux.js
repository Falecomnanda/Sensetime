const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            login: "/login",
            calendarEvent: "user",
            SedeAdmin: "",
            cursos: [{ curso: "YOGA I", sede: "PROVIDENCIA", cupos: 10, },
            { curso: "YOGA II", sede: "PROVIDENCIA", cupos: 10, },
            { curso: "MASAJE", sede: "LAS CONDES", cupos: 10, },
            { curso: "PELUQUERÍA", sede: "LAS CONDES", cupos: 10, },
            { curso: "YOGA IV", sede: "PROVIDENCIA", cupos: 10, },
            { curso: "YOGA I", sede: "LAS CONDES", cupos: 10, }
            ],
            sedes: [{ sede: "PROVIDENCIA" },
            { sede: "LAS CONDES" },
            { sede: "ÑUÑOA" },
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
            subadmin: (id) => {
                let sel = document.getElementById(id.target.id)
                let text = sel.options[sel.selectedIndex].text
                //console.log(text)
                setStore({ sedeAdmin: text })
            }
        }
    }
}

export default getState;