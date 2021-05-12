import { useAuth0 } from '@auth0/auth0-react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import UnAuthenticatedApp from './UnAuthenticatedApp'

export default function Home() {
    const { isAuthenticated, isLoading, error, loginWithRedirect } = useAuth0()
    const router = useRouter()

    if (error) {
        console.log('AuthHandler Error: ', error.message)
        return (
            <div className="mx-auto max-w-xl whitespace-normal rounded-lg bg-rose-100 text-rose-700 px-6 py-3">
                {error.message}
            </div>
        )
    }

    if (isLoading) {
        return <div>Authenticating users....</div>
    }

    console.log('AuthHandler:: ', isAuthenticated)

    if (isAuthenticated) {
        console.log('Calling isAuthenticated with router.push')
        router.push('/authenticated')
        return null
    } else {
        return <UnAuthenticatedApp />
    }
}
