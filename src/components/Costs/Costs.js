import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import "./Costs.css";
import React, { useState } from "react";
import CostList from "./CostList";

function Costs(props) {
  const [selYear, setSelYear] = useState("2022");

  const yearChangeHandler = (year) => {
    setSelYear(year);
  };

  const filteredCosts = props.costs.filter(
    (cost) => cost.date.getFullYear().toString() === selYear
  );

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selYear} onChangeYear={yearChangeHandler} />
        <CostList costs = {filteredCosts}/>
      </Card>
    </div>
  );
}

export default Costs;
