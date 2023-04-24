'use client'
import React, { useEffect } from 'react'
 
function UserDashboard() {
  useEffect(()=>{
    const token: string| null = localStorage.getItem("myytkey")
    if(token){
  const data: tokenDetails = JSON.parse(token)
      
    }
  })
  return (
    <div>
      ajdjd
    </div>
  )
}

export default UserDashboard
