export const editJobApplication = (jobAppId, userId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/users/${userId}/job_applications/${jobAppId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
        })
        .then(resp => resp.json())
        .then(job_app => dispatch({type: "EDIT_JOB_APPLICATION", payload: job_app}))
    }
}