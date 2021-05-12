export const addJobApplication = (data) => {
    const userId = data.user_id
    return (dispatch) => {
        fetch(`https://stormy-refuge-75117.herokuapp.com/api/v1/users/${userId}/job_applications`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(job_app => dispatch({type: "ADD_JOB_APPLICATION", payload: job_app}))
    }
}