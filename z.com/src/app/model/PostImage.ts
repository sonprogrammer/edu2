import { Post } from "@/app/model/Post"

export interface PostImage{
    link: string
    imageId: number
    Post?: Post
}