import { connectDB } from "@/util/database"

export default async function Write2(){

    async function handleSubmit(formData){
        'use server'
        const client = await connectDB
        const db = await client.db('forum')
        const result = await db.collection('post_test').insertOne({title: formData.get('title')})
    
    }
    return(
        <div>
            <form action={handleSubmit}>  
            {/* console에 hi가 뜸 */}
                <input name="title" type="text" /> 
                {/* input의 name에 title이라고  입력한 데이터가 콘솔창에 뜸  */}
                <button type="submit">button</button>
            </form>
        </div>
    )
}