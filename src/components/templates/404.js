import React from 'react'
import { Link } from 'react-router-dom'
export default function Error() {
  return (
    <div className='container pt-24 min-h-[95vh]'>
      <p>Error 404</p>
      <Link to="/">Go back</Link>
    </div>
  )
}
