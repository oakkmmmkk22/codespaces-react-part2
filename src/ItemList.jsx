import { useState,useEffect } from "react";

function Item({name,isPacked=false}){
    return (<li>
        {name}{isPacked && ' ✓'}
    </li>)
}
export default function ItemList(){
    const [text,setText]=useState("");
    useEffect(()=>{
        console.log("this component is loaded!");
        return()=>{alert("component unloaded!")}
    },[])
    const items=[
        {name:"Sunglasses",isPacked:true},
        {name:"Sunblock",isPacked:false},
        {name:"Swimming suit", isPacked:true},
        {name:"Powerbank", isPacked:true},
        {name:"Towel", isPacked:false},
        {name:"Rungwikrai", isPacked:true},
    ];
    const filterList=items.filter(i=>i.name.toLowerCase().includes(text))
    
    

    const itemsList=filterList.map(i=><Item key={i} name={i.name} isPacked={i.isPacked}/>)
    return (
        <>
        <input type="text" onChange={e=>setText(e.target.value.toLowerCase())}/>
        <ui>
            {itemsList}
        </ui>
        </>
    )
}