export const deleteJobApplication = (jobAppId, userId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}/job_applications/${jobAppId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
        })
        .then(resp => resp.json())
        .then(user => dispatch({type: "DELETE_JOB_APPLICATION", payload: user}))
    }
}