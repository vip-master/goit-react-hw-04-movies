import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {orderPathRoutes } from '../../utils/routes/logic.js'


function Switcher({routes,path=""}) {
    return (
        <>
            <Switch>    
            	{orderPathRoutes(routes).map(route=>
            		<Route 
            		   	key={route.name} 
            		   	path={path+route.path} 
            		   	exact={route.exactRoute} 
            		   	component={route.component}
            		/>
            	)}

            </Switch>
        </>
    )
}

export default Switcher
