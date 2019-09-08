import React from 'react'
import './projects.scss'
import { tad } from '../../descriptions/descriptions'
import { pgd } from '../../descriptions/descriptions'
import { pad } from '../../descriptions/descriptions'



function Projects() {
    return (
        <div className='projects-container'>
            <div className='project'>
                <a href='https://travelapp-api99.herokuapp.com/'><div className='pic'>
                    <span className='text'>See App In Action</span>
                </div></a>
                <div className='description'>
                    {tad}
                    <a href='https://youtu.be/V4XQn1TsRPQ'>Video Walkthrough</a>
                </div>
            </div>
            <div className='project'>
                <a href='https://pickup-dimes.herokuapp.com/'><div className='pic2'>
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