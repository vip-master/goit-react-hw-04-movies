import React from 'react'
import {uppercase} from '../../utils/routes/logic.js'
import { NavLink } from 'react-router-dom';

function Navigator({routes,path="",StyledList=({children})=><ul>{children}</ul>}) {
    return (
        <StyledList>
            {routes.map(route=>(
                route.isLink && <li key={route.path}>
                	<NavLink
                            to={path+route.path}
                            exact={route.exactLink}
                            activeClassName={"active"}
                        >
                		{uppercase(route.name)}
                	</NavLink>
                </li>
            ))}
        </StyledList>
    )
}

export default Navigator
