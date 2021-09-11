import React from 'react'
import routes from '../../utils/routes/mainRoutes.js'
import Navigator from '../navigator/Navigator'
import {StyledContainer, StyledList} from './styles.js'

function Header() {
    return (
    	<StyledContainer>
    		<Navigator routes={routes} StyledList={StyledList}/>
    	</StyledContainer>
    )
}

export default Header
