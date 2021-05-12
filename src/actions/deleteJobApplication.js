export const deleteJobApplication = (jobAppId, userId) => {
    return (dispatch) => {
        fetch(`https://morning-ridge-63294.herokuapp.com/users/${userId}/job_applications/${jobAppId}`, {
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