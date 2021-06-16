export const deleteJobApplication = (jobAppId, userId) => {
    return (dispatch) => {
        // fetch(`https://stormy-refuge-75117.herokuapp.com/api/v1/users/${userId}/job_applications/${jobAppId}`, {
            fetch(`http://localhost:3000/api/v1/users/${userId}/job_applications/${jobAppId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(user => dispatch({type: "DELETE_JOB_APPLICATION", payload: user}))
    }
}