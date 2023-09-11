import React from 'react'
import './styles/input-registro.css'

function Correo(props) {
	return (
		<>
			{/* lable vacío !!!!!*/}

			{/* <label
				className={`correo ${props.correo}`}
				htmlFor={`correo ${props.correo}`}
				>
				{' '}
			</label> */}
			<input
				className="input-registro"
				type="email"
				name={`correo ${props.correo}`}
				label={`correo ${props.correo}`}
				placeholder={`correo ${props.correo}`}
				required
			></input>
		</>
	)
}

export default Correo
