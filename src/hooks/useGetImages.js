import { useState } from 'react'
const auth = '563492ad6f91700001000001d47e50555c46469eb1cf693bfd97be76'

export const useGetImages = () => {
	const [category, setCategory] = useState('')
	const [images, setImages] = useState([])
	const [categoryText, setCategoryText] = useState('')
	const [concatImages, setConcatImages] = useState([])
	const [loading, setLoading] = useState(false)

	const getImages = async () => {
		setLoading(true)
		await fetch(
			`https://api.pexels.com/v1/search?query=${
				category.length === 0 ? 'summer' : category
			}`,
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
				setConcatImages(result.photos)
				setLoading(false)
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
			setCategoryText(e.target.value)
			setCategory('')
		}
	}

	return {
		concatImages,
		images,
		getImages,
		category,
		setCategory,
		onKeyDownHandler,
		nextPage,
		categoryText,
		loading
	}
}
