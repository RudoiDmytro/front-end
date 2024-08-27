'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { authService } from '@/services/auth.service'

const Auth = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginFrom, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: async (data: IAuthForm) =>
			authService.main(isLoginFrom ? 'login' : 'register', data),
		onSuccess: data => {
			toast.success('Login successful')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => mutate(data)

	return (
		<div className='flex min-h-screen'>
			<form
				className='w-1/4 m-auto shadow gradient1 rounded-xl p-4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex items-center gap-5 justify-center'></div>
			</form>
		</div>
	)
}

export default Auth
