import {request} from './request.js'
import vars from './vars.js'

const {
	token,
	url,
	trends,
	search:find,
	movie,
	credit,
	review,
	config,
	noImg
}=vars

const imageURL={
	isFull:false,
	loadPromise:null,
	base_url:"",
	posterSize:"",
	backdropSize:"",
	actorsSize:"",
}

const chooseSize=(arr)=>arr[arr.length-1]

const init=async()=>{
	if(imageURL.isFull) return false;
	if(imageURL.loadPromise!==null) return await imageURL.loadPromise

	imageURL.loadPromise = new Promise((resolve)=>{
		request(token,url+config).then((res)=>{
			imageURL.loadPromise=null
			if(res.isError) resolve(res)
			else{
				imageURL.base_url=res.data.images.base_url
				imageURL.posterSize=chooseSize(res.data.images.poster_sizes)
				imageURL.backdropSize=chooseSize(res.data.images.backdrop_sizes)
				imageURL.actorsSize=chooseSize(res.data.images.profile_sizes)

				imageURL.isFull=true
				resolve(false)
			}
		})
	})
	
	return await imageURL.loadPromise
}

const takeResArr=(res)=>res.data.results.map(({title,id})=>({title,id}))


export const filmList=async()=>takeResArr(await request(token,url+trends))

export const search=async(query)=>takeResArr(await request(token+"&query="+query.trim().replaceAll(" ","%20"),url+find))

export const movieById=async(id)=>{
	const initImage=await init()
	if(initImage) return initImage

	let result=await request(token,url+movie+"/"+id)
	if(result.isError) return result
	result=result.data

	result.posterImg=result.poster_path?imageURL.base_url+imageURL.posterSize+result.poster_path:noImg
	result.backdropImg=result.backdrop_path?imageURL.base_url+imageURL.backdropSize+result.backdrop_path:noImg

	return result
}

export const movieCast=async(id)=>{
	const initImage=await init()
	if(initImage) return initImage

	let result=await request(token,url+movie+"/"+id+credit)
	if(result.isError) return result
	result=result.data.cast.map(({name,character,profile_path})=>
		({
			name,
			character,
			profileImg:profile_path?imageURL.base_url+imageURL.actorsSize+profile_path:noImg
		}))
	return result
}

export const movieRev=async(id)=>{
	let result=await request(token,url+movie+"/"+id+review)
	if(result.isError) return result
	result=result.data.results
	return result
}

export const tryError=async(path,t=true)=>await request(t?token:"?api_key=fgoe8754t34",url+path)
