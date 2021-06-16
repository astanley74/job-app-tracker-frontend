export const addUser = (data) => {
    return (dispatch) => {
        fetch('https://thawing-ocean-45459.herokuapp.com/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({user: data})
        })
        .then(resp => resp.json())
        .then(data => {
            window.localStorage.setItem("jwt", data.jwt)
            dispatch({type: "ADD_USER", payload: data.user})
        })
    }
}