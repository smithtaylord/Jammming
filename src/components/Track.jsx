import React from 'react';
import '../assets/scss/components/Track.scss'
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react'

export default function Track() {

    return (

        <div className="Track border-bottom border-secondary d-flex justify-content-between align-items-center">
            <div className='px-3'>
                <h4 className='text-light'>Song Title</h4>
                <span className='text-secondary fs-5'>Artist | Album</span>
            </div>
            <div className='px-3'>
                <div>
                    <Icon path={mdiPlus} size={1} className='text-light' />
                </div>
            </div>
        </div>
    )

}