
const userReducer = (state = {user: {job_applications: []}}, action) => {
    switch(action.type) {
        case "ADD_USER":
            return { user: action.payload}
        case "ADD_JOB_APPLICATION":
            return {...state,
                user: {...state.user, job_applications: [...state.user.job_applications, action.payload]}  
            }
        case "DELETE_JOB_APPLICATION":
            return { user: action.payload }
        case "EDIT_JOB_APPLICATION":
            return { user: action.payload }
        case "LOGIN_USER":
            return { user: action.payload}
        case "LOGOUT_USER":
            return { user: {job_applications: []}}
        default: 
            return state
    }
}

export default userReducer