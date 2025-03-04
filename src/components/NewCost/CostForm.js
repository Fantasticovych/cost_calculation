import React,{useState} from "react";
import "./CostForm.css"

const CostForm = (props)=>{

    const [name,setName] = useState('');
    const [amount,setAmount] = useState('');
    const [date,setDate] = useState('');

    // const [userInput,setUserInput]= useState({
    //     name:'',
    //     amount:'',
    //     date:''
    // });

    const nameChangeHandle=(e)=>{
        setName(e.target.value); 
        // setUserInput({
        //     ...userInput,
        //     name:e.target.value
        // });   

        // Коли потрібно зберігати декілька попередніх станів
    
        // setUserInput((previousState)=>{
        //     return {
        //         ...previousState,
        //         name:e.target.value
        //     }
        // });
    };

    const amountChangeHandle=(e)=>{
        setAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     amount:e.target.value
        // });    
    };

    const dateChangeHandle=(e)=>{
        setDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     date:e.target.value
        // });  
    };

    const submitHandler = (e)=>{
        e.preventDefault();

        const costData = {
            name:name,
            amount:amount,
            date: new Date(date)
        }
        props.onSaveCostData(costData); //з дочірнього в батьківський(створення власного атрибуту)

        setAmount('');
        setDate('');
        setName('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
        <div className="new-cost__control">
            <label>Назва</label>
            <input type="text" onChange={nameChangeHandle} value={name}/>
        </div>
        <div className="new-cost__control">
            <label>Суму</label>
            <input type="number" min='0.01' step='0.01' onChange={amountChangeHandle} value={amount} />
        </div>
        <div className="new-cost__control">
            <label>Дата</label>
            <input type="date" min='2020-01-01' step='2025-03-01' onChange={dateChangeHandle} value={date} />
        </div>
        <div className="new-cost__actions">
            <button type="submit">Додати витрати</button>
        </div>
        </div>
    </form>

}

export default CostForm;