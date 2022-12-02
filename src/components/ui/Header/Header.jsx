import React from 'react'
import style from './Header.module.scss'

const Header = ({ onKeyDown, onChange, value, categoryText }) => {
	return (
		<div className={style.container}>
			<h1>Image gallery</h1>
			<div className={style.subTitle}>
				<h2>
					{categoryText.length === 0
						? 'Enter your request...'
						: `Your request: ${categoryText}`}
				</h2>
				<input
					onKeyDown={onKeyDown}
					placeholder="Search Images..."
					onChange={e => onChange(e.target.value)}
					value={value}
				/>
			</div>
		</div>
	)
}

export default Header
