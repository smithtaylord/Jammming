/* eslint-disable react/prop-types */
import React from 'react';
import '../assets/scss/components/Track.scss'
import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react'

export default function Track({ track }) {
    // const track = props.track

    return (

        <div className="Track border-bottom border-secondary d-flex justify-content-between align-items-center p-1 mb-3">
            <div className='px-3'>
                <h4 className='text-light'>{track?.name}</h4>
                <span className='text-secondary fs-5'>{track?.artist} | {track?.album}</span>
            </div>
            <div className='px-3'>
                <div className='selectable'>
                    <Icon path={mdiPlus} size={1} className='text-light' />
                </div>
            </div>
        </div>
    )

}