import React from 'react'
const waiter = (sec:number) => new Promise((res,rej) => setTimeout(res,sec * 1000))

const User = async () => {
    await waiter(10)
  return (
    <div>User</div>
  )
}

export default User