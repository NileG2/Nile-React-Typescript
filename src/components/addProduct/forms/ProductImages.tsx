import React, { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";

const ProductImages = () => {
  const allowedFormats = ["jpg", "jpeg", "png", "gif"];

  const [file, setFile] = useState<any>(null);
  const [allFiles, setAllFiles] = useState<any>([]);

  function removeData(index: number) {
    setAllFiles(
      allFiles.filter((elem: any, ind: number) => {
        return ind !== index;
      })
    );
  }

  async function addFile() {
    if (allowedFormats.includes(file.type.split("/")[1])) {
      setAllFiles((old: any) => [...allFiles, file]);
      setFile(null);
    } else {
      alert("file format not allowed");
      setFile(null);
    }
  }

  useEffect(() => {
    console.log(allFiles);
  }, [allFiles]);

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
      <div className="d-flex justify-content-center">
        <button className="std-btn std-btnOrange" style={{ width: "10rem" }}>
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductImages;
