import CostItem from "./CostItem"
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import "./Costs.css"
import React , {useState} from "react";

function Costs(props){

    const [selYear,setSelYear] = useState('2021');
    const yearChangeHandler = (year)=>{
     setSelYear(year);
    }
    
    return(
    <div>
    <Card className="costs"> 
    <CostsFilter year = {selYear} onChangeYear={yearChangeHandler}/>
    <CostItem date={props.costs[0].date}
    description={props.costs[0].description}
    amount={props.costs[0].amount}></ CostItem>
   
    < CostItem date={props.costs[1].date}
    description={props.costs[1].description}
    amount={props.costs[1].amount}></ CostItem>
    
    < CostItem date={props.costs[2].date}
    description={props.costs[2].description}
    amount={props.costs[2].amount}></ CostItem>
    </Card>
    </div>
    );
}

export default Costs;