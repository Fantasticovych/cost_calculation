import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";

const INITIAL_COSTS=[
  {
    id: "c1",
    date: new Date(),
    description:"холодильник",
    amount:99.9
  },
  {
    id: "c2",
    date: new Date(),
    description:"валянок",
    amount:199.9
  },
  {
    id: "c3",
    date: new Date(),
    description:"банан",
    amount:3
  },
];

function App() {

  const [costs, setCosts]= useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCost => {
      return [cost, ...prevCost];
    });
  }

  return (
    <div>
        <NewCost onAddCost = {addCostHandler}/>
        <Costs costs={costs}/> 
    </div>  
  );
}

export default App;
