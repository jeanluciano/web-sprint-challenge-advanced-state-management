import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import Smurf from "./Smurf";
import { getSmurfs } from "../actions";
export const SmurfDisplay = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, []);

  const smurfs = useSelector((state) => state.smurfs);
  const isLoading = useSelector((state) => state.isFetching);

  return (
    <div>
      {isLoading ? (
        <h1>Loading Smurfs</h1>
      ) : (
        smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.id} />)
      )}
      <div></div>
    </div>
  );
};

export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
