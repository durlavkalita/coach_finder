export default {
    async login(context, payload) {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFVMJ1J1VbebCw8ad2Beol1rDMV2ZlaCw`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    async signup(context, payload) {
        const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAFVMJ1J1VbebCw8ad2Beol1rDMV2ZlaCw`, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate');
            throw error;
        }

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    logout(context) {
        context.commit('setUser', {
            token: null,
            userId: null,
            tokenExpiration: null
        })
    }
}