import React,{lazy} from 'react'
import Switcher from '../switcher/Switcher'
import routes from '../../utils/routes/mainRoutes.js'

const paramRoute={
    key:"movie" ,
    path:"movies",
    component:lazy(()=>import('../../Components/movie/Movie.js'))
}

function Main() {
    return (
        <>
            <Switcher routes={routes} paramRoute={paramRoute} />
        </>
    )
}

export default Main
