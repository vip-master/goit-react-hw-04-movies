import React from 'react'
import {useParams,useHistory} from 'react-router-dom'
import {useAPI} from '../../utils/hooks/useAPI.js'
import {movieRev} from '../../utils/api/API.js'
import Loader from '../loader/Loader.js'
import {StyledList} from './styles.js'

const noRev="We don't have any reviews for this movie"

function Reviews() {
	const rev=useAPI(movieRev,useParams().id)
	const {push}=useHistory()	

	if(rev===null) return (<Loader/>)

	if(rev.isError){
		push("/error",{error:rev})
		return (<></>)
	}

	return (
		<>
			{!rev.length ? noRev : (
				<StyledList>
					{rev.map(({author,content},i)=>(
						<li key={i}>
							<h4>Author: {author}</h4>
							<p>{content}</p>
						</li>
					))}
				</StyledList>
			)}
		</>
	)	
}

export default Reviews