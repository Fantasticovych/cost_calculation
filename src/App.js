import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

function App() {

  const cost=[
    {
      date: new Date(),
      description:"холодильник",
      amount:99.9
    },
    {
      date: new Date(),
      description:"валянок",
      amount:199.9
    },
    {
      date: new Date(),
      description:"банан",
      amount:3
    },
  ];

  const addCostHandler = (cost) => {
    console.log(cost);
    
  }

  return (
    <div>
        <NewCost onAddCost = {addCostHandler}/>
        <Costs costs={cost}/> 
    </div>  
  );
}

export default App;
