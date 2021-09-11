import React from 'react'
import { Switch, Route } from 'react-router-dom';
import {orderPathRoutes, getNameRoute } from '../../utils/routes/logic.js'


function Switcher({routes,path="",paramRoute}) {
    return (
        <>
            <Switch>
                    
            	{paramRoute && <Route 
                    key={paramRoute.key}
                    path={getNameRoute(routes,paramRoute.path)+"/:id"}
                    component={paramRoute.component}
                />}
    
            	{orderPathRoutes(routes).map(route=>
            		<Route 
            		   	key={route.path} 
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
