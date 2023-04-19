import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import {Auth} from 'aws-amplify'
import { useState, useEffect } from "react";

function Profile() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        checkUser()
    }, [])

    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser()
        setUser(user)
    }
}
