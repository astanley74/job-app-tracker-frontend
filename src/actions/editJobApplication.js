export const editJobApplication = (jobAppId, data) => {
    return (dispatch) => {
        fetch(`https://morning-ridge-63294.herokuapp.com/api/v1/users/${data.user_id}/job_applications/${jobAppId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(user => dispatch({type: "EDIT_JOB_APPLICATION", payload: user}))
    }
}