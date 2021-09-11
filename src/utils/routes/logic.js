const specificPath=(route)=>route.path.split("/").filter(i=>i!=="").length

export const orderPathRoutes=(routes)=>{

	const result=[...routes]

    result.sort((a,b)=>{
    	if(a.exactRoute && !b.exactRoute) return -1
    	if(!a.exactRoute && b.exactRoute) return 1
        if(specificPath(a)>specificPath(b))return -1
        if(specificPath(a)<specificPath(b))return 1
        return 0
    })
    return result
}

export const uppercase=(str)=>str.split("").map((e,i)=>i===0?e.toUpperCase():e).join("")

export const getNameRoute=(routes,name)=>routes.reduce((a,c)=>c.name===name?c.path:a,"")