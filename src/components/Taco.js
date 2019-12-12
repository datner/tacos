import React from 'react'

import Title from 'components/Title'
import Recipes from 'components/Recipes'
import useUnsplash from 'utils/useUnsplash'

const Taco = ({ taco }) => {
    console.log(taco, taco.names)
    return (
        <div>
            <Title {...taco.names} />
            <PictureOfTaco />
            <Recipes recipes={taco.recipes} />
        </div>
    )
}

const PictureOfTaco = () => {
    const { data, loading, error } = useUnsplash()
    console.log({ data })
    if (error) return <div>wtf</div>
    if (loading) return <div>...</div>

    return (
        <figure>
            <img style={{
                width: "100%",
                maxHeight: 400,
                objectFit: "cover"
            }} src={data.urls.regular} alt={data.alt_description} />
            <figcaption>Photo by <a href={data.user.links.html+'?utm_source="taco generator"&utm_medium=referral'} target="_blank" rel="noopener noreferrer">{data.user.name}</a> on <a href='https://unsplash.com/?utm_source="taco generator"&utm_medium=referral' target="_blank" rel="noopener noreferrer">Unsplash</a></figcaption>
        </figure>
    )
}

export default Taco
