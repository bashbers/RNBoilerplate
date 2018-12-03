
const INITIAL_STATE = {
    username: "test",
    isLoading: false
};

const auth = (state = INITIAL_STATE, action) => {
    let newState = {
        ...state,
    };

    switch (action.type) {
        case 'auth_start_loading':
            return newState.isLoading = true;
        case 'auth_stop_loading':
            return newState.isLoading = false;
        default:
            return state;
    }
};

export default auth;
