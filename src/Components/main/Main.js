import React from 'react'
import Switcher from '../switcher/Switcher'
import routes from '../../utils/routes/mainRoutes.js'


function Main() {
    return (
        <>
            <Switcher routes={routes} />
        </>
    )
}

export default Main
