import React from "react"

export default function HeaderLinks(props) {
    return  <span className="header-links">    
    
        
        {
            props.user ? <a href="/" onClick={props.logout}>Logout</a>:
            <span>
                <a href ="/#" onClick={props.sigin}>Sign in</a>
                <a href ="/#">Register</a>
            </span>}
        
</span>
}