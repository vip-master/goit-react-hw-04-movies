import axios from 'axios'

export const request=async(token,path)=>{
	let result
	try{
		result=await axios.get(path+token)
		result.isError=false
	}
	catch({response}){
		result=response.data
		result.status=response.status
		result.statusText=response.statusText
		result.isError=true
	}
	return result
}

