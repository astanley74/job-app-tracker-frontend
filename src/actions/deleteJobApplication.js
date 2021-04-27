export const deleteJobApplication = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/job_applications/{id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'DELETE',
        })
        .then(resp => resp.json())
        // .then(id => dispatch({type: "DELETE_JOB_APPLICATION", payload: id}))
        .then(data => console.log(data))
    }
}