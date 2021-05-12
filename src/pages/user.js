import { withAuthenticationRequired } from '@auth0/auth0-react'

const User = () => {
    return <div>Users page</div>
}

export default withAuthenticationRequired(User, {
    onRedirecting: () => <div>Redirecting you to the login...</div>,
    returnTo: '/user',
})
