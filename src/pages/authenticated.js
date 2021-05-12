import Link from 'next/link'
import { withAuthenticationRequired } from '@auth0/auth0-react'

const AuthenticatedPage = () => {
    return (
        <>
            <div>Authenticated PAGE</div>
            <Link href="/user">
                <a>Users</a>
            </Link>
        </>
    )
}

export default withAuthenticationRequired(AuthenticatedPage, {
    onRedirecting: () => <div>Redirecting you to the login...</div>,
    returnTo: '/authenticated',
})
