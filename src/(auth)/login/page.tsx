"use client"
import { useAuthStore } from '@/store/auth'
import React from 'react'

const LoginPage = () => {
    const { login } = useAuthStore()
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const email = formData.get("email")
        const password = formData.get("password")

        //validation
        if (!email || !password) {
            setError(() => "Please fill out the fields")
            return
        }

        // handle loading and error
        setIsLoading(()=>true)
        setError(()=>" ")
        const loginResponse = await login(email.toString(),password.toString())
            if(loginResponse.error){
                setError(() => loginResponse.error!.message)
            }
            setIsLoading(()=>false) 
            
    }       
   
    return (
        <div>LoginPage</div>
    )
}

export default LoginPage