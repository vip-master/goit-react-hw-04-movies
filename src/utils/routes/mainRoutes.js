import {lazy} from 'react'

const routes=[
    {
        name:"error",
        path:"/",
        exactLink:false,
        exactRoute:false,
        isLink:false,
        component:lazy(()=>import('../../Components/error/Error.js')),
    },
    {
        name:"home",
        path:"/",
        exactLink:true,
        exactRoute:true,
        isLink:true,
        component:lazy(()=>import('../../Components/home/Home.js')),
    },
    
    {
        name:"movies",
        path:"/movies",
        exactLink:false,
        exactRoute:true,
        isLink:true,
        component:lazy(()=>import('../../Components/moviesSearch/MoviesSearch.js')),
    },
    {
        name:"movieId",
        path:"/movies/:id",
        exactLink:false,
        exactRoute:false,
        isLink:false,
        component:lazy(()=>import('../../Components/movie/Movie.js')),
    },
]

export default routes