import React from 'react'
import Navbar from '../../../components/navbar'

interface Props {
    children:React.ReactNode,
    user:React.ReactNode,
    jumbo:React.ReactNode
}

const layout = (props:Props) => {
    return <>
        <div>
            <Navbar/>
            {props.children}
            LAYOUT
            <div className='flex flex-row'>
            <div className='w-[50%] bg-red-400'>{props.user}</div>
            <div className='w-[50%] bg-yellow-300'>{props.jumbo}</div>
            </div>
          
        </div>
    </>
}

export default layout