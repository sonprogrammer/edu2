import { PostImage } from "@/app/model/PostImage"
import { User } from "@/app/model/User"

export interface Post{
    postId:number
    User: User
    content: string
    createdAt: Date
    Images: PostImage[]
}