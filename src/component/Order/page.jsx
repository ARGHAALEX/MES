import React from 'react'
import { useParams } from 'react-router-dom'

export const Order = () => {
   const params=useParams();
   console.log(params)
  return (
    <div>{params.id}</div>
  )
}
