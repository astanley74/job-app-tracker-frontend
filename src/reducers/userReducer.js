const userReducer = (state = {user: {job_applications: []}}, action) => {
    switch(action.type) {
        case "ADD_USER":
            return { user: action.payload}
        case "ADD_JOB_APPLICATION":
            return {...state,
                user: {...state.user, job_applications: [...state.user.job_applications, action.payload]}  
            }
        default: 
            return state
    }
}

export default userReducer