import React from 'react'
import { useHistory } from 'react-router-dom';

function Error() {

	const history=useHistory()

	let error=history.location.state

	if(!error || !error.error){
		error={data:{}}
		error.statusText="Page not found"
		error.status=""
		error.status_message=""

		history.replace("/")
	} else error = error.error
	
	return(
		<>
			<h1>{error.statusText} {error.status}</h1>
			<h2>{error.status_message}</h2>
		</>
	)
}

export default Error