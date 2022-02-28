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

  return <div>
    <input type="file" onChange={(e)=>{handleFileUpload(e)}} multiple/>
    <button onClick={()=>{uploadFiles(files)}} >Upload</button>
    <br/>
    <input onChange={(e)=>{handleChange(e)}}/>
    <button onClick={()=>{handleFileDelete()}}>Delete</button>
  </div>;
};

export default Test;
