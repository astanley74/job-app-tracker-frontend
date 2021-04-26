const userReducer = (state = {user: {job_applications: []}}, action) => {
    switch(action.type) {
        case "ADD_USER":
            return { user: action.payload}
        default: 
            return state
    }
}

export default userReducer