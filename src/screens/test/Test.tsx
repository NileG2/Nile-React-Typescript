import React,{useState,useEffect} from "react";


const Test = () => {

    function sessionManage(){
        const auth = sessionStorage.getItem("user"); 
        if(auth !==null){
            const user = JSON.parse(auth);
            user["isSeller"] = true; 
            sessionStorage.setItem("USERTEST", JSON.stringify(user));
            console.log(user);
        }
    }

    return <div>
        <button onClick={()=>{sessionManage();}}>Check Auth</button>
    </div>;
};

export default Test;
