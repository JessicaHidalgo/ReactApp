import React from "react"
import Headerlinks from "./headerlinks.js"


export default function Header(props) {
   // throw new Error ('User not found')
    return  <header className="app-header">
        <h3> Test Application header </h3>        
        <Headerlinks user={props.user} logout={props.logout} sigin={props.sigin}/>
        </header>
}
    
