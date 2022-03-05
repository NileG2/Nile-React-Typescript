import React,{useState} from 'react'
import {MdClear} from 'react-icons/md'

const ProductHighlights = () => {
    
    const [highlights,setHighlights] = useState<any>([])
    const [curr,setCurr] = useState("")

    function addHighlight(data:any){
        setHighlights([...highlights,data])
        setCurr("")
    }

    function removeHighlight(index:number){
        setHighlights(highlights.filter((elem:any,id:number)=>{
            return id!==index
        }))
    }
    
    return (
        <form className="std-card m-2">
            <p className='std-font2'>Product Highlights</p>
            <div className="row m-2">
                <label className="col-4 std-boldFont">Add Highlight :</label>
                <div className='input-group'>
                    <input className="std-inputField col-8" value={curr} onChange={(e)=>{setCurr(e.target.value)}}></input>
                    <div className='std-btn std-btnOrange' onClick={()=>{addHighlight(curr)}}>+</div>
                </div>
            </div>
            <br />
            <div>
                <p className="std-boldFont std-font2">About this Product</p>
                <ul>
                    {
                        highlights.length>0?highlights.map((elem:any,index:number)=>{
                            return <li key={index} className='std-boldFont'>
                                {
                                    elem
                                }
                                <MdClear onClick={()=>{removeHighlight(index)}}/>
                            </li>
                        }):<>Nothing to show yet</>
                    }
                </ul>
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <button
                    className="std-btn std-btnOrange"
                    style={{ width: "10rem" }}
                >
                    Save
                </button>
            </div>
        </form>
    )
}

export default ProductHighlights