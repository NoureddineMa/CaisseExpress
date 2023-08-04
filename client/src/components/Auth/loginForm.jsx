import React from 'react'
import { Login } from '../../Utils/Req'
import { useState } from 'react'
import Alert from '../Alerts/Alert'
import { useNavigate } from "react-router-dom"

function LoginForm() {

    const [user, setUser] = useState({
        Email: '',
        Password: ''
    })

    const navigate = useNavigate()

    const [messageAPI, setMessageAPI] = useState('')
    const [succes, setSucces] = useState(false)
    const [error, setError] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({ ...prevState, [name]: value }))
    }

    const LoginHandler = (e) => {
        e.preventDefault()
        try {
            Login(user).then((data) => {
                console.log(data?.message)
                setSucces(true)
                setError(false)
                setMessageAPI(data?.message)
                const role = data?.nameRole
                localStorage.setItem('role', role)
                setTimeout(() => {
                    if (role === "superadmin") {
                        console.log('role hhhhhhh');
                        navigate('/superadmin')
                    } else if (role === "employee") {
                        navigate('')
                    } else if (role === "client") {
                        navigate('')
                    }
                }, 0.4)
            }).catch((err) => {
                console.log(err?.response.data.message);
                setSucces(false)
                setError(true)
                setMessageAPI(err?.response.data.message)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-lg">



                <form
                    onSubmit={LoginHandler}
                    class="mb-0 mt-12 space-y-4 rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8"
                >
                    <div className='mb-4'>
                        {succes && <Alert message={messageAPI} className="flex  items-center bg-green-500 text-white text-sm  px-4 py-3" />}
                        {error && <Alert message={messageAPI} className="flex  items-center bg-red-500 text-white text-sm  px-4 py-3" />}
                    </div>
                    <div>

                        <div class="relative">
                            <label htmlFor="Email" className='text-xs	 text-gray-600 my-4'>Email</label>
                            <input
                                required
                                onChange={handleInputChange}
                                id='Email'
                                name="Email"
                                type="email"
                                class="w-full border-2 border-gray-300 p-4 pe-12 text-sm shadow-sm"
                                placeholder="cofee@cofee.ma"
                            />
                        </div>
                    </div>

                    <div>

                        <div class="relative">
                            <label htmlFor="Email" className='text-xs	 text-gray-600 my-4'>Mot de Passe</label>

                            <input
                                required
                                onChange={handleInputChange}
                                id='Password'
                                name="Password"
                                type="password"
                                class="w-full border-2 border-gray-300 p-4 pe-12 text-sm shadow-sm"
                                placeholder="******"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        class="block w-full bg-[#65451F] px-5 py-3 text-sm font-medium text-white"
                    >
                        Se Connecter
                    </button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
