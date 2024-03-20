
import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export default async function middleware(req){
    console.log(req.nextUrl)
    NextResponse.next() //통과 유저를 서버로보내라
    // NextResponse.redirect() // 다른페이지로 강제이동 주소창도 변경
    // NextResponse.rewrite() //다른페이지로 강제이동 주소창은 냅둠

    req.cookies.get('쿠키이름') //출력
    req.cookies.has('쿠키이름') //존재확인
    req.cookies.delete('쿠키이름') //삭제

    //쿠키 생성해서 보내주려면
    const response = NextResponse.next()
    response.cookies.set({
        name: 'mode',
        value: 'dark',
        maxAge: 3600,
        httpOnly: true //유저가 자바스크립트로 쿠키조작 방지
    })
    return response

    ///list 페이지 접속 기록 몰래저장하기 
    if(req.nextUrl.pathname ==='/list'){
        console.log(req.headers.get('sec-ch-ua-platform'))
    }

    //미로그인 유저 /write접속시 로그인페이지로
    // jwt
    const session = await getToken({req : req})

    if(req.nextUrl.pathname.startsWith('/write')){
        if(session === null){
            return NextResponse.redirect('http://localhost:3000/api/auth/signin')
        }
    }

}