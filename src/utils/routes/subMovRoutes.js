import {lazy} from 'react'

const routes=[
    {
        name:"cast",
        path:"/cast",
        exactLink:true,
        exactRoute:true,
        isLink:true,
        component:lazy(()=>import('../../Components/cast/Cast.js')),
    },
    {
        name:"reviews",
        path:"/reviews",
        exactLink:true,
        exactRoute:true,
        isLink:true,
        component:lazy(()=>import('../../Components/reviews/Reviews.js')),
    },
    {
        name:"error",
        path:"/:some",
        exactLink:false,
        exactRoute:false,
        isLink:false,
        component:lazy(()=>import('../../Components/error/Error.js')),
    },
]

export default routes