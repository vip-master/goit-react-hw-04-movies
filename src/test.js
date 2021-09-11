import * as api from './utils/api/API.js'

const test1=async()=>{
	console.log(await api.filmList())
}

const test2=async()=>{
	console.log(await api.search("batman"))
}

const test3=async()=>{
	console.log(await api.movieById(234))
}

const test4=async()=>{
	console.log(await api.movieCast(436969))
}

const test5=async()=>{
	console.log(await api.movieRev(436969))
}


const tests=[test1,test2,test3,test4,test5]

const e=()=>tests.forEach(t=>t())

export default e 