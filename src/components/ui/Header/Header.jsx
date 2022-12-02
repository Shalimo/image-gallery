import React from 'react'
import style from './Header.module.scss'

const Header = ({ onKeyDown, onChange, value }) => {
	return (
		<div className={style.container}>
			<h1>Image gallery</h1>
			<input
				onKeyDown={onKeyDown}
				placeholder="Search"
				onChange={e => onChange(e.target.value)}
				value={value}
			/>
		</div>
	)
}

export default Header
