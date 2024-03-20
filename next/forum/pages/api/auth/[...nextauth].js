import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'a2f15482be2a73abdf2c', //github에서 발급받은 id
            clientSecret: '600249eeb8e377462b73a0e30ade582ad6f34605',   //github에서 발급받은 secret
        }),
    ],
    secret : 'qwer123' //jwt생성시 쓰는 암호(아무거나)
}

export default NextAuth(authOptions)