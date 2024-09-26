import { useRef, useState } from "react"
const BmiText=({bmi})=>{
    const str="SSSS";
    if(bmi<18.50)
        return (<h1>Underweight/Skinny</h1>);
    else if(bmi<22.90)
        return (<h1>Normal</h1>);
    else if(bmi<24.90)
        return (<h1>Obese/Cured Level 1</h1>);
    else if(bmi<29.90)
        return (<h1>Obese/obese level 2</h1>);
    else 
        return (<h1>Very obese/obese level 3</h1>);
}
export default function Bmi(){
    const W_input = useRef(null)
    const H_input = useRef(null)
    const [BMI, setBMI] = useState(0.00)
    function handleClick(){
        const W = W_input.current.value;
        const H = H_input.current.value;
        const bmi = W/H/H*10000;
        setBMI(bmi)
        return ;
    }
    return (<>
        Weight:<input type="number" ref={W_input} placeholder="weight"/><br />
        Height:<input type="number" ref={H_input} placeholder="high (cm.)"/><br />
        <button onClick={handleClick}>calculate</button><br />
        BMI:{BMI.toFixed(2)}
        <BmiText bmi={BMI} />
    </>)
}