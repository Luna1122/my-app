import React from 'react'
import { Link } from 'react-router-dom'
const Test = () => {
    return (
        <>
          <Link to="/">Home</Link>  &nbsp;
          <Link to="/second">Second</Link> &nbsp;
          <Link to="/third">Third</Link> &nbsp;

        </>
    )
}

export default Test
