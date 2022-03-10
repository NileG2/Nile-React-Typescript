import React,{useState,useEffect} from "react";

import {uploadFiles,deleteFile} from '../../services/imageUpload/imageUpload'

const Test = () => {

  const [files,setfiles] = useState<any>([])
  const [filename,setfilename] = useState<string>("")

  function handleFileUpload(e:any){
    setfiles(e.target.files)
  }

  function handleFileDelete(){
    // console.log(filename)
    deleteFile(filename)
  }

  function handleChange(e:any){
    setfilename(e.target.value)
  }

  function sessionManage(){
    let auth = sessionStorage.getItem("user") 
    if(auth !==null){
      let user = JSON.parse(auth)
      user['isSeller'] = true 
      sessionStorage.setItem("USERTEST", JSON.stringify(user))
      console.log(user)
    }
  }

  return <div>
    <input type="file" onChange={(e)=>{handleFileUpload(e)}} multiple/>
    <button onClick={()=>{uploadFiles(files)}} >Upload</button>
    <br/>
    <input onChange={(e)=>{handleChange(e)}}/>
    <button onClick={()=>{handleFileDelete()}}>Delete</button>
    <br />
    <button onClick={()=>{sessionManage()}}>Check Auth</button>
  </div>;
};

export default Test;
