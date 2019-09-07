import React from 'react'
import './projects.scss'
import { tad } from '../../descriptions/descriptions'



function Projects() {
    return (
        <div className='projects-container'>
            <div className='project'>
                <a href='https://travelapp-api99.herokuapp.com/'><div className='pic'>
                    <span class='text'>See App In Action</span>
                </div></a>
                <div className='description'>
                    {tad}
                    <a href='https://www.linkedin.com/in/adamsrcory/detail/treasury/summary/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAAB8i-QoBWh076p4H_OIFqg9vWfVrAEexroY%2C1567178667946)&section=summary&treasuryCount=3&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3ByvWF4B9hQGST8FEg2z1oPA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-treasury_thumbnail_cell'>Video Walkthrough</a>
                </div>
            </div>
        </div>
    )
}


export default Projects