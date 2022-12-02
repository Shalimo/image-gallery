import React, { useEffect } from 'react'
import { useGetImages } from '../../../hooks/useGetImages'
import Header from '../../ui/Header/Header'
import Spinner from '../../ui/Spinner/Spinner'
import style from './Home.module.scss'

const Home = () => {
	const {
		concatImages,
		getImages,
		category,
		setCategory,
		onKeyDownHandler,
		nextPage,
		categoryText,
		loading
	} = useGetImages()

	useEffect(() => {
		getImages()
	}, [])

	return (
		<div>
			<div className={style.container}>
				<div className={style.section}>
					<Header
						onKeyDown={onKeyDownHandler}
						onChange={setCategory}
						value={category}
						categoryText={categoryText}
					/>
					{loading ? (
						<div>
							<Spinner />
						</div>
					) : (
						<div>
							<div className={style.imgContainer}>
								{concatImages?.map(item => (
									<div className={style.image} key={item.id}>
										<img src={item.src.large} />
										<p>{item.photographer}</p>
									</div>
								))}
							</div>
							<button className={style.projectButton} onClick={nextPage}>
								More...
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Home
