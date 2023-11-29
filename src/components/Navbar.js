import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const handleChange=(e)=>{
         console.log("sdjfkjshdfjksfks",e.target.value)
         props.selectMode(e.target.value)
    }
    

    return (
        
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>

                <div className={`form-check text-${props.mode==='light'? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="radio" value="light" onChange={ handleChange }  name="flexRadioDefault" id="flexRadioDefault2"  checked={props.chooseMode==='light'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Light
                    </label>
                </div>

                <div className={`form-check text-${props.mode==='dark'? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="radio" value="dark" onChange={ handleChange } name="flexRadioDefault" id="flexRadioDefault1" checked={props.chooseMode==='dark'}/>
                    
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                       Dark
                    </label>
                </div>
                
                <div className={`form-check text-${props.mode==='green'? 'light' : 'black'}`}>
                    <input className="form-check-input" type="radio" value="green" onChange={ handleChange }  name="flexRadioDefault" id="flexRadioDefault3" checked={props.chooseMode==='green'} />
                    <label className="form-check-label" htmlFor="flexRadioDefault3">
                        green
                    </label>
                </div>
               <div className={`form-check text-${props.mode==='yellow'? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="radio" value="yellow" onChange={ handleChange } name="flexRadioDefault" id="flexRadioDefault4" checked={props.chooseMode==='yellow'}/>
                    <label className="form-check-label" htmlFor="flexRadioDefault4">
                        yellow
                    </label>
                </div>

                <div className={`form-check form-switch text-${props.mode==='light'? 'dark' : 'light'}`}>
                    <input className="form-check-input" type="checkbox" value="props.togglecondition" onChange={props.toggleMode} role="switch" id="flexSwitchCheckDefault"  checked={props.togglecondition === 'on'} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">swichScreenMode</label>
                </div>
            </div>
        </nav>
        </>
    )
}

//set props type
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}


//set default props value set
Navbar.defaultProps = {
    title: 'textUtils'
};