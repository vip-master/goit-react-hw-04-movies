import React,{useState,useEffect} from 'react'
import {useRouteMatch, useHistory} from 'react-router-dom'
import {useAPI} from '../../utils/hooks/useAPI.js'
import {movieById} from '../../utils/api/API.js'
import routes from '../../utils/routes/subMovRoutes.js'
import Navigator from '../navigator/Navigator'
import Switcher from '../switcher/Switcher'
import Loader from '../loader/Loader.js'
import {StyledInfoSection, 
	StyledInfoBlock, 
	StyledExtraSection, 
	StyledExtraList
} from './styles.js'

function Movie() {

	const {push,location:{state}}=useHistory()

	const {url,path,params}=useRouteMatch()

	const [back,setBack]=useState(null)

	useEffect(()=>{
		if(state) setBack(state)
	},[state])

	const movie=useAPI(movieById,params.id)
	
	if(movie===null) return (<Loader/>)

	if(movie.isError){
		push("/error",{error:movie})
		return (<></>)
	}

	const {title,release_date,vote_average,posterImg,overview,genres}=movie

	const year=release_date.split("-")[0]

	const vote=vote_average*10
	
	const go=()=>push(back.location)
	
	return (
		<>	
			{back && back.location && <button type="button" onClick={go}>Go back</button>}
			<StyledInfoSection>
				<img src={posterImg} alt="poster" />
				<StyledInfoBlock>
					<h3>{title} ({year})</h3>
					<p>User Score: {vote}%</p>
					<h4>Overview</h4>
					<p>{overview}</p>
					<h4>Genres</h4>
					<ul>
						{genres.map((genre,i)=>(<li key={i}>{genre.name}</li>))}
					</ul>
				</StyledInfoBlock>
			</StyledInfoSection>
			<StyledExtraSection>
				<h4>Additional information</h4>
				<Navigator routes={routes} path={url} StyledList={StyledExtraList} />
			</StyledExtraSection>
			<Switcher routes={routes} path={path} />
		</>
	)
}

export default Movie