import { useState, useEffect } from 'react';

export const useAPI=(callback,params,clean=()=>{})=>{
	const [data, setData]=useState(null)

	useEffect(()=>{
		const af=async()=>{
			if(params===undefined) setData(await callback())
			else if(params) setData(await callback(params))
			else setData(undefined)
		}
		af()
		return ()=>{
			clean()
		}
	},[params])

	return data
}