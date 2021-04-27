const userReducer = (state = {user: {job_applications: []}}, action) => {
    switch(action.type) {
        case "ADD_USER":
            return { user: action.payload}
        case "ADD_JOB_APPLICATION":
            return {
                ...state,
                job_applications: [...state.job_applications, action.payload]
            }
        default: 
            return state
    }
}

export default userReducer