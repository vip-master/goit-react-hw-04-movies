import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import routes from '../../utils/routes/mainRoutes.js'
import {getNameRoute} from '../../utils/routes/logic.js'
import Loader from '../loader/Loader.js'
import {StyledList} from './styles.js'


function FilmList({list=null}) {
	const movies=getNameRoute(routes,"movies")

	const {push,location}=useHistory()

	if(list===null) return (<Loader/>)

	if(list.isError){
		push("/error",{error:list})
		return (<></>)
	}

	return(
		<StyledList>
			{list.map(film=>(
				<li key={film.id}>
					<Link to={{pathname:movies+"/"+film.id, state:{location}}} >
						{film.title}
					</Link>
				</li>
			))}
		</StyledList>
	)
}

export default FilmList