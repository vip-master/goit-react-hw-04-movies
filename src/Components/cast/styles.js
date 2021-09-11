import com from 'styled-components'

export const StyledList = com.ul`
	padding-top: 10px;
	padding-left: 3%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	img{
		max-width: 10%;
		margin-bottom: 10px;
	}

	h4{
		font-weight: normal;
		margin-bottom: 25px;
	}
`