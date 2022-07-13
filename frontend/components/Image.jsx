import { urlFor } from "../sanity"

const Image = ({identifier, image}) => {
    return (
        <div className={identifier === "main-image" ? "main-image" : "image"}>
            {image && (
                <img src={urlFor(image).url()}/>
            )}
        </div>
    )
}

export default Image