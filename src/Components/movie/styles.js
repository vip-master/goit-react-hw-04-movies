import com from 'styled-components'

export const StyledInfoSection=com.section`
	display: flex;
	gap: 25px;
	margin-bottom: 5px;

	img{
		max-width: 25%;
	}
`

export const StyledInfoBlock=com.div`
	h3{
		padding-bottom: 17px;
	}

	h4,p{
		padding-bottom: 15px;
	}

	ul{
		list-style: none;
		display: flex;
		gap: 15px;
	}
`

export const StyledExtraSection=com.section`
	border-top: solid 3px rgba(55,55,55,0.2);
	border-bottom: solid 3px rgba(55,55,55,0.2);
	padding-top: 30px;
	padding-bottom: 30px;

	h4{
		font-weight: normal;
	}
`

export const StyledExtraList=com.section`
	padding: 10px;
	padding-left: 30px; 
`