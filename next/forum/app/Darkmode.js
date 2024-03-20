'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"


export default function Darkmode(){
    let router = useRouter()
    useEffect(()=>{
        let value = ('; ' +document.cookie).split(`; mode=`).pop().split(';')[0]
        if(value == ''){ //mode라는 쿠키값이 비어있으면 밑에 실행
            document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400)
        }
    },[])
    return(
        <span onClick={()=>{ 
            let value = ('; ' +document.cookie).split(`; mode=`).pop().split(';')[0]
            if(value == 'light'){
                document.cookie = 'mode=dark; max-age=' + (3600 * 24 * 400) //cookie수정
                router.refresh() //자동 새로고침
            }else{
                document.cookie = 'mode=light; max-age=' + (3600 * 24 * 400) //cookie수정
                router.refresh() 
            }
        }}> 🌙 </span>
    )
}