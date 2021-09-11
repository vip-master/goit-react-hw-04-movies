import React from 'react'
import FilmList from '../filmList/FilmList'
import {useAPI} from '../../utils/hooks/useAPI.js'
import {filmList} from '../../utils/api/API.js'
import {StyledContainer} from './styles.js'

function Home() {
	const list=useAPI(filmList)
	
	return(
		<StyledContainer>
			<h2>Trendings today</h2>
			<FilmList list={list}/>
		</StyledContainer>
	)
}

export default Home