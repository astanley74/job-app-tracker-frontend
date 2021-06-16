export const deleteJobApplication = (jobAppId, userId) => {
    return (dispatch) => {
            fetch(`https://thawing-ocean-45459.herokuapp.com/api/v1/users/${userId}/job_applications/${jobAppId}`, {
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