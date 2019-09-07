import React from 'react'
import './navBar.scss'
import { withRouter } from 'react-router-dom'

function NavBar(props) {

    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <div className='nav'>
            <button name='/' id='firstbtn' onClick={handleClick}>Home</button>
        </div>
    )
}

export default withRouter(NavBar)