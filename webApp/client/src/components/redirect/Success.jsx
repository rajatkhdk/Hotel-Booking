import React from 'react'
import { useNavigate } from 'react-router-dom'

const Success = () => {
const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
  }
  return (
    <div>
      success 
      <button on onClick={handleClick}>home</button>
    </div>
  )
}

export default Success
