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
             
        </Fragment>
    )
}