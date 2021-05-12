import { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UnAuthenticatedApp = () => {
    const { loginWithRedirect } = useAuth0()

    useEffect(() => {
        loginWithRedirect({
            portalType: 'Partner Portal',
        })
    }, [loginWithRedirect])

    return null
}

export default UnAuthenticatedApp
