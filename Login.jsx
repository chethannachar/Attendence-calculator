import { useState } from "react";
function Login(){
    const[subject,setsubject]=useState("");
    const[attended,setattended]=useState();
    const[held,setheld]=useState();
    const[result,setresult]=useState(null);
    const[status,setstatus]=useState(null);
    const [s,sets]=useState("");
    const handle= async (e)=>{
        try{
        const response=await fetch("http://localhost:5000/submit ",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({subject:subject,a:attended,h:held})
        });
    }
    catch(error){
        console.log(error);
    }
    }
    let res;
    function attendence(){
        handle();
        const a=Number(attended);
        const h=Number(held);
        
        
        const percentage = (a / h) * 100;
        setresult(`Percentage:      ${percentage.toFixed(2)}%`); 
        const m=(a-(0.85*h))/0.85;
        const needed=(((0.85*h)-a)/(1-0.85));
        
        setstatus(m.toFixed(0));
        const message=`Status:   You can Miss next ${m.toFixed(0)} Classes`;
        const nmessage=`Status:  You Cannot Miss any Classes `;
        const pmessage=`Status:  You Need Attend Next ${needed.toFixed(0)} Classes`
        if(m>0){
            sets(message)
        }
        else if(m==0){
            sets(nmessage);
        }
        else{
            sets(pmessage);
        }
       
    }
    return(
        <div>
         <div className="gap">   
        <div className="input-form">
        <form onSubmit={handle}> 
            <input type="text" onChange={(e)=>setsubject(e.target.value)} value={subject} placeholder="Subject-Title"></input>
            <input type="number" onChange={(e)=>setattended(e.target.value)}value={attended} placeholder="Classes Attended"></input>
            <input type="number" onChange={(e)=>setheld(e.target.value)}value={held} placeholder="Out Of"></input>
        </form>
        <button onClick={attendence} className="b2">Calculate</button>
        
        <div className="result">
    
        <h2 className="res">{result}</h2>

        <h3 className="res1">{s} </h3>
        </div>  
        </div>
    </div>    
    </div>
    );
}
export default Login;