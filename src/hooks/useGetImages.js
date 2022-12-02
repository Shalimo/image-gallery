import { useState } from 'react'
const auth = '563492ad6f9170000100000112ea80bd3b5646778fec532774e48b71'

export const useGetImages = () => {
	const [category, setCategory] = useState('summer')
	const [images, setImages] = useState([])
	const [concatImages, setConcatImages] = useState([])

	const getImages = async () => {
		await fetch(`https://api.pexels.com/v1/search?query=${category}`, {
			headers: {
				Authorization: auth
			}
		})
			.then(data => {
				return data.json()
			})
			.then(result => {
				setImages(result)
				setConcatImages(result.photos)
			})
	}

	const nextPage = async () => {
		await fetch(
			images?.next_page
				? images?.next_page
				: `https://api.pexels.com/v1/search?query=${category}`,
			{
				headers: {
					Authorization: auth
				}
			}
		)
			.then(data => {
				return data.json()
			})
			.then(result => {
				setImages(result)
				setConcatImages([...concatImages, ...result.photos])
			})
	}

	const onKeyDownHandler = e => {
		if (e.keyCode === 13) {
			getImages()
		}
	}

	return {
		concatImages,
		images,
		getImages,
		category,
		setCategory,
		onKeyDownHandler,
		nextPage
	}
}
