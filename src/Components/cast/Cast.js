import React from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {useAPI} from '../../utils/hooks/useAPI.js'
import {movieCast} from '../../utils/api/API.js'
import Loader from '../loader/Loader.js'
import {StyledList} from './styles.js'

function Cast() {
	const cast=useAPI(movieCast,useParams().id)
	const {push}=useHistory()	
	
	if(cast===null) return (<Loader/>)

	if(cast.isError){
		push("/error",{error:cast})
		return (<></>)
	}

	return (
		<StyledList>
			{cast.map(({name,character,profileImg},i)=>(
				<li key={i}>
					<img src={profileImg} alt="profileImage" />
					<h4>{name}</h4>
					<p>Character: {character}</p>
				</li>
			))}
		</StyledList>
	)	
}

export default Cast