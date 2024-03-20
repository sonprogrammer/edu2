'use client'

export default function Error({error, reset}){
    return(
        <>
        <h4>error!</h4>
        <button onClick={()=>{reset()}}>button</button>
        {/* 페이지 다시 리로드 */}
        </>
    )
}