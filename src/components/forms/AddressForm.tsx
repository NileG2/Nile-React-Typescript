import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {fetchAllAddresses} from '../../redux/actions/UserDetails'

export default function AddressForm(props:any) {
  const currAddress = useSelector((state:any)=>state.userDetails.currAddress)

  
  const dispatch = useDispatch()
  const addressList = useSelector((state:any)=>state.userDetails.addressList)
  
  const [address_line_1, setaddress_line_1 ] = useState("");
  const [locality, setlocality ] = useState("");
  const [pincode, setpincode ] = useState("");
  const [city, setcity ] = useState("");
  const [state, setstate ] = useState("");
  const [country, setcountry ] = useState("");

  const [formData, setFormData] = useState(currAddress);
  
  const onChangeHandler = (e:any)=>{
    e.preventDefault()
    setFormData( {...formData, [e.target.name] : e.target.value } )
  }

  useEffect(()=>{
    console.log(currAddress)
  },[])

  // useEffect(()=>{
  //   setFormData(currAddress)
  //   setaddress_line_1(currAddress.Personal_details.address_line_1)
  //   setlocality(currAddress.Personal_details.locality)
  //   setpincode(currAddress.Personal_details.pincode)
  //   setcity(currAddress.Personal_details.city)
  //   setstate(currAddress.Personal_details.state)
  //   setcountry(currAddress.Personal_details.country)
  //   console.log(props.index)
  // }, [currAddress, formData])

  const updatedAddress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()

      axios.put(`http://localhost:9000/api/detail/update/1`,{
            address_line_1 : address_line_1,
            locality : locality,
            pincode : pincode,
            city : city,
            state : state,
            country : country
        }).then((resp)=>{

            axios
            .get("http://localhost:9000/api/detail/users")
            .then(({ data }) => {
              // setUserId(data.status.userId)
              // setusers1(data.status.Personal_details);

              dispatch(fetchAllAddresses(data.status.Personal_details)); 
              alert("Updated Successfully")
            })
            .catch((err) => {
              alert(err);
            });
            
        }).catch((err)=>{
            alert(err)

    })
  }


  return (
    
    <div className="std-card m-2">
        {
            props.flag===true?
            <>
            <p className="std-font2">Enter/Edit your new address</p>
            <div className="std-section"></div>
            </>
            : <div> </div>
            
        }
      
      <form className="m-2" >
        
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Address Line 1 :</label>
          <input className="std-inputField col-8" value={address_line_1} name="addressline1" onChange={(e)=>{setaddress_line_1(e.target.value)}}></input>
        </div>
    
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Locality :</label>
          <input className="std-inputField col-8" value={locality} name="locality" onChange={(e)=>{setlocality(e.target.value)}}></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">City :</label>
          <input className="std-inputField col-8" value={city} name="city" onChange={(e)=>{setcity(e.target.value)}}></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">Pin code :</label>
          <input className="std-inputField col-8" value={pincode} name="pincode" onChange={(e)=>{setpincode(e.target.value)}}></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">State :</label>
          <input className="std-inputField col-8" value={state} name="state" onChange={(e)=>{setstate(e.target.value)}}></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">Country :</label>
          <input className="std-inputField col-8" value={country} name="country" onChange={(e)=>{setcountry(e.target.value)}}></input>
        </div>

        <br />
        <div className="d-flex justify-content-center">
          <button
            className="std-btn std-btnOrange"
            style={{ width: "20rem" }}
            onClick = {(e)=> {updatedAddress(e)}}
          >
            ADD/UPDATE
          </button>
        </div>
      </form>
  
    </div>
  
  );
}
