import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div>ErrorPage

        {error && <p>{error.data}</p>}
        <NavLink to='/'>
        <button>Go to Home</button>
        </NavLink>
    </div>
  )
}

export default ErrorPage