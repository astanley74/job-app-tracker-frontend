export const editJobApplication = (jobAppId, data) => {
    return (dispatch) => {
        // fetch(`https://stormy-refuge-75117.herokuapp.com/api/v1/users/${data.user_id}/job_applications/${jobAppId}`, {
            fetch(`http://localhost:3000/api/v1/users/${data.user_id}/job_applications/${jobAppId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(user => dispatch({type: "EDIT_JOB_APPLICATION", payload: user}))
    }
}