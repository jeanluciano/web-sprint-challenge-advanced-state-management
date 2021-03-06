import { 
    HANDLE_ERROR, 
    FETCHING_SMURFS_START, 
    FETCHING_SMURFS_SUCCESS,
    ADDING_SMURF_SUCCESS
 } from "../actions"



export const initialState = {
    smurfs: [],
    isFetching: false,
    error:''
}

const reducer = (state = initialState ,action)=>{
    switch(action.type){
        case (FETCHING_SMURFS_START):
            return({
                ...state, 
                isFetching:true,
                error:''
            })
            case(FETCHING_SMURFS_SUCCESS):
            return({
                ...state,
                isFetching: false,
                smurfs: [...action.payload],
            })
        case(HANDLE_ERROR):
            return({
                ...state,
                error: action.payload
            })

        case ADDING_SMURF_SUCCESS:
            return{
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, action.payload]}
        default:
            return(state)

    }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary