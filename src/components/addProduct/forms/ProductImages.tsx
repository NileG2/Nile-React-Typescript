import React, { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import {uploadFiles,deleteFile} from '../../../services/imageUpload/imageUpload'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../../redux/actions/Product'
import { async } from "@firebase/util";

const ProductImages = () => {

  let product = useSelector((state:any)=>state.productDetail.product)
  let dispatch = useDispatch()
  const allowedFormats = ["jpg", "jpeg", "png", "gif"];

  const [file, setFile] = useState<any>(null);
  const [allFiles, setAllFiles] = useState<any>([]);
  const [myfiles, setmyfiles] = useState<any>([]);

  function removeData(index: number) {
    setAllFiles(
      allFiles.filter((elem: any, ind: number) => {
        return ind !== index;
      })
    );
    product['images'].splice(index,1)
    dispatch(createProduct(product))
  }
  let [urls, setUrl] = useState<any>([]);

  async function addFile() {
    if (allowedFormats.includes(file.type.split("/")[1])) {
      myfiles.push(file.name)

      
      setAllFiles((old: any) => [...allFiles, file]);
      setmyfiles((old: any) => [...myfiles, file.name])
      setFile(null);
    } else { 
      alert("file format not allowed");
      setFile(null);
    }
  }

  const onClickHadler = async(e:any)=>{
    e.preventDefault()
    
    // let allUrls = await uploadFiles(allFiles)
    // console.log(allUrls)
  }

  useEffect(() => {
    product['images'] =  myfiles
    dispatch(createProduct(product))
  }, [allFiles, dispatch, myfiles, product, setAllFiles]);

  return (
    <form className="std-card m-2">
      <p className="std-font2">Upload product images</p>
      <div className="row m-2">
        <label className="std-boldFont">
          Select or type a number defining the size :
        </label>
        <div className="input-group">
          <input
            type="file"
            className="std-inputField"
            placeholder="select file"
            onChange={(e: any) => {
              setFile(e.target.files[0]);
            }}
          ></input>
          <div
            className="std-btn std-btnOrange"
            onClick={() => {
              addFile();
            }}
          >
            +
          </div>
        </div>
      </div>
      <br />
      <div>
        <p className="std-boldFont std-font2">Added Pictures</p>
        {allFiles.length > 0 ? (
          <>
            {allFiles.map((elem: any, index: number) => {
              return (
                <div key={index}>
                  {elem.name}
                  <MdClear
                    onClick={() => {
                      removeData(index);
                    }}
                  />
                </div>
              );
            })}
          </>
        ) : (
          <>Nothing to show yet</>
        )}
      </div>
      <br />
      
    </form>
  );
};

export default ProductImages;
