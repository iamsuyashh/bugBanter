"use client"
import { useAuthStore } from '@/store/auth'
import React from 'react'

const RegisterPage = () => {

    const { createAccount, login } = useAuthStore();
    const [isLoading, setIsLoading] = React.useState(false)
    const [error, setError] = React.useState("")

    const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // collect data
        const formData = new FormData(e.currentTarget)
        const firstname = formData.get("firstName")
        const lastname = formData.get("lastName")
        const email = formData.get("email")
        const password = formData.get("password")

        // validate

        if (!firstname || !lastname || !email || !password) {
            setError(() => "Please Fill out the fields")
            return
        }

        //call the store

        setIsLoading(true)
        setError("")

        const response = await createAccount(
            `${firstname} ${lastname}`,
            email?.toString(),
            password?.toString()
        )

        if (response.error) {
            setError(() => response.error!.message)
        }
        else {
            const loginResponse = await login(email.toString(), password.toString())
            if (loginResponse.error) {
                setError(() => loginResponse.error!.message)
            }
        }

        setIsLoading(()=>false)
    }

    return (
        <div>{
                    error && (
                        <p className="text-red-500">{error}</p>
                    )
               }</div>
    )
}

export default RegisterPage