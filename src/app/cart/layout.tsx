import React from 'react'
interface props {
    children:React.ReactNode,
    props:"string"
}

const layout:React.FC<props> = ({children,props}) => {
    return <>
        <div>
            {children}
            LAYOUT
        </div>
    </>
}

export default layout