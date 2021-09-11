import com from 'styled-components'

export const StyledContainer = com.div`
	padding: 10px;
	padding-left: 20px;
	-webkit-box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.2);
	-moz-box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.2);
	box-shadow: 0px 5px 4px -1px rgba(34, 60, 80, 0.2);
`

export const StyledList = com.ul`
	display: flex;
	color: black;
	list-style: none;
	gap: 10px;

	a{
		color: black;
	}
`