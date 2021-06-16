export const addUser = (data) => {
    return (dispatch) => {
        // fetch('https://stormy-refuge-75117.herokuapp.com/api/v1/users')
        fetch('http://localhost:3000/api/v1/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            // body: JSON.stringify(data)
            body: JSON.stringify({user: data})
        })
        .then(resp => resp.json())
        // .then(user => dispatch({type: "ADD_USER", payload: user}))
        .then(data => {
            window.localStorage.setItem("jwt", data.jwt)
            dispatch({type: "ADD_USER", payload: data.user})
        })
    }
}