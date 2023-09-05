import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div id='notfound'>
    <div className="notfound">
        <p>Page not found 404</p>
    </div>

    <NavLink to="/">Back to home page</NavLink>
      
    </div>
  )
}

export default ErrorPage
