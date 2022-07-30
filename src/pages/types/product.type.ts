export type ClothingType = {
    id: string,
    name: string,
    style: string,
    price: number,
    rating: number,
    description: string,
    color: string,
    image: ImageType[]
    sizes?: SizeType[],
    similarProducts?: SimilarProductsType[]
}

export type SimilarProductsType = {
    id: string,
    image: ImageType
}

export type SizeType = {
    size: string,
    avaliable: boolean,
}

export type ImageType = {
    url: string,
    id: number,
    description: string,
}