import React from "react"
import { Link } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

export default function AccountUser(){
    const [email,setEmail] = React.useState<string>("")
    const [password,setPassword] = React.useState<string>("")

    const handleEmail = (value:string) =>{
        setEmail(value)
    }

    const handlePassWord = (value:string) =>{
        setPassword(value)
    }
    const handleSumbitSession = () =>{
        const body= {
            email,
            password
        }
        console.log(body)
    }
    return(
        <Fragment>
             <div className="login-main"> 
             <div className="theme-form">
                  <h4>Crear Cuenta</h4>
                  <p>Crea tu cuenta en SNAP ORDER</p>
                  <div className="form-group">
                    <label className="col-form-label pt-0">Tus nombres</label>
                    <div className="row g-2">
                      <div className="col-6">
                        <input className="form-control" type="text"  placeholder="First name" />
                      </div>
                      <div className="col-6">
                        <input className="form-control" type="text"  placeholder="Last name" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Correo</label>
                    <input 
                        className="form-control" 
                        type="email"  
                        placeholder="Test@gmail.com"
                        onChange={(e) => handleEmail(e.target.value as string)}
                     />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Contraseña</label>
                    <div className="form-input position-relative">
                      <input className="form-control" 
                            type="password" 
                            name="login[password]"  
                            placeholder="*********"
                            onChange={(e) =>handlePassWord(e.target.value as string)}
                        />
                      <div className="show-hide"><span className="show"></span></div>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                     <button 
                        className="btn btn-primary btn-block w-100" 
                        type="submit"
                        onClick={() => handleSumbitSession()}
                    >Iniciar session</button>
                  </div>
                  <p className="mt-4 mb-0">Ya tienes cuenta inicia session?<Link className="ms-2" to={"/"}>aqui</Link></p>
                </div>
            </div>
        </Fragment>
    )
}