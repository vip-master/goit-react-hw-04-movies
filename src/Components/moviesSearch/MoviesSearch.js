import React, {useState} from 'react'
import FilmList from '../filmList/FilmList'
import { useHistory,useLocation} from "react-router-dom";
import {useAPI} from '../../utils/hooks/useAPI.js'
import {search} from '../../utils/api/API.js'
import {StyledContainer} from './styles.js'

const searchParse=(loc)=>{
	let value = loc.search
	const searchStr="?search="
	return (value && value.includes(searchStr))? value.slice(searchStr.length).trim().replaceAll("%20"," "): ""
}

function MoviesSearch() {
	const history = useHistory()
	const location = useLocation()

	const init=searchParse(location)

	const [input ,setInput]=useState(init?init:"film name")

	let list=useAPI(search,searchParse(location))

	const handleSubmit=(e)=>{
		e.preventDefault()
		history.push({
		   	pathname: location.pathname,
		   	search: `?search=${input}`,
		   	state: { location }
		})
	}

	const handleChange=(e)=>setInput(e.target.value)

	return(
		<StyledContainer>
			<form onSubmit={handleSubmit}>
				<input value={input} type="text" name="search" onChange={handleChange}/>
                <button type="submit">search</button>
			</form>

			{list!==undefined && <FilmList list={list}/>}
		</StyledContainer>
	)
}

export default MoviesSearch