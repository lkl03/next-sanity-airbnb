import { createClient } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
}

const builder = imageUrlBuilder(config)

export const urlFor = (source) => {
  return builder.image(source)
}

export const sanityClient = createClient(config)