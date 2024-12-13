import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'a2f15482be2a73abdf2c',
            clientSecret: '22bca480a5e69745358d3a9c46866a7e2f93d851'
        }),
    ],
    secret: 'sonprogrammer123'
}

export default NextAuth(authOptions)
