import React from 'react'

const waiter = (sec:number) => new Promise((res,rej) => setTimeout(res,sec * 1000))

const Jumbo = async () => {
    await waiter(6)
  return (
    <div>Jumbo</div>
  )
}

export default Jumbo