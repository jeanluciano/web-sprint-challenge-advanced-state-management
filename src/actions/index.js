import axios from "axios";

export const HANDLE_ERROR = "HANDLE_ERROR";
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const ADDING_SMURF_START = "ADDING_SMURF_START";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";


export const getSmurfs = () => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });

  axios
    .get(`http://localhost:3333/smurfs`)
    .then((res) => {
      console.log("this is the res get", res.data);
      dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: HANDLE_ERROR, payload: err.response});
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({ type: FETCHING_SMURFS_START });
  
  axios
    .post(`http://localhost:3333/smurfs`, newSmurf)
    .then((res) => {
      console.log('****')
      dispatch({ type: ADDING_SMURF_SUCCESS, payload: newSmurf});
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: HANDLE_ERROR, payload: err.response});
    });
};
//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
