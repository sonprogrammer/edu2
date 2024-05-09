import axios, { AxiosResponse } from 'axios'
import {useEffect, useState } from 'react'


interface Problem{
    _id: string
    problem: string
    answer: string
    description: string
    user: string
}


interface UseGetProblemsResult{
    problems: Problem[]
    loading: boolean
    error: string | null
}


const useGetProblem = (userId: string) : UseGetProblemsResult =>{
    const [problems, setProblems] = useState<Problem[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() =>{
        const fetchProblems = async () =>{
            try {
                setLoading(true)
                const response: AxiosResponse<Problem[]> = await axios.get(`http://localhost:3000/${userId}`)
                setProblems(response.data)
                setLoading(false)
            } catch (error) {
                setError('failed to fetch problems')
                setLoading(false)
            }
        }
        fetchProblems()
    }, [userId])

    return { problems, loading, error}

}

export default useGetProblem