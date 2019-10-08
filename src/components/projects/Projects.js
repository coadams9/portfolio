import React from 'react'
import './projects.css'
import { tad } from '../../descriptions/descriptions'
import { pgd } from '../../descriptions/descriptions'
import { pad } from '../../descriptions/descriptions'
import { cad } from '../../descriptions/descriptions'



function Projects() {
    return (
        <div className='projects-container'>
            <h3>All Sites have a username: 'Test' and a password: '1234' for your convenience. :)</h3>
            <div className='project'>
                <a href='https://travelapp-api99.herokuapp.com/' target='_blank'><div className='pic'>
                    <span className='text'>See App In Action</span>
                </div></a>
                <div className='description'>
                    {tad}
                    <a href='https://youtu.be/V4XQn1TsRPQ' target='_blank'>Video Walkthrough</a>
                </div>
            </div>

            <div className='project'>
                <a href='https://cbayfrontend.herokuapp.com' target='_blank'><div className='pic1'>
                    <span className='text'>See App In Action</span>
                </div></a>
                <div className='description'>
                    {cad}
                </div>
            </div>

            <div className='project'>
                <a href='https://pickup-dimes.herokuapp.com/' target='_blank'><div className='pic2'>
                    <span className='text'>See App In Action</span>
                </div></a>
                <div className='description'>
                    {pgd}
                </div>
            </div>
            <div className='project'>
                <div className='pic3'>
                    <span className='text'>You're seeing this in Action. :)</span>
                </div>
                <div className='description'>
                    {pad}
                </div>
            </div>
        </div>
    )
}


export default Projects