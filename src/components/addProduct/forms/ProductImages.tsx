import React, { useEffect, useState } from "react";
import { MdClear } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/Product";
import {
    getDownloadURL,
    ref,
    uploadBytesResumable,
    deleteObject,
    getStorage,
    uploadBytes,
} from "firebase/storage";
import { storage } from "../../../firebaseSetup";
import { v4 as uuid } from "uuid";

const ProductImages = () => {
    const product = useSelector((state: any) => state.productDetail.product);
    const dispatch = useDispatch();
    const allowedFormats = ["jpg", "jpeg", "png", "gif", "jfif"];

    const [file, setFile] = useState<any>(null);
    const [allFiles, setAllFiles] = useState<any>([]);
    const [myfiles, setmyfiles] = useState<any>([]);

    useEffect(() => {
        console.log(myfiles);
    }, [myfiles]);

    function removeData(index: number) {
        deleteFileHandler(myfiles[index]);
        setAllFiles(
            allFiles.filter((elem: any, ind: number) => {
                return ind !== index;
            })
        );
        setmyfiles(
            myfiles.filter((elem: any, ind: number) => {
                return ind !== index;
            })
        );
        product["images"].splice(index, 1);
        dispatch(createProduct(product));
    }
    const [urlList, setUrlList] = useState<any>([]);

    async function addFile() {
        const extension = file.name.split(".")[1].split(" ")[0];
        if (allowedFormats.includes(extension)) {
            if (file.size <= 1 * 1024 * 1024) {
                const fileName = getUniqueName(extension);
                fileUploadHandler(fileName);
            } else {
                console.log("file size too big");
                return false;
            }
        } else {
            alert("file format not allowed");
            setFile(null);
        }
    }

    function getUniqueName(extension: string) {
        return uuid() + "." + extension;
    }

    const fileUploadHandler = (fileName: string) => {
        if (!file) {
            return;
        }

        const storage = getStorage();
        const storageRef = ref(storage, `Products/${fileName}`);

        uploadBytes(storageRef, file)
            .then((snapshot) => {
                console.log("Uploaded a blob or file!");
                getDownloadURL(snapshot.ref)
                    .then((url) => {
                        setUrlList([...urlList, url]);
                        setAllFiles((old: any) => [...allFiles, file]);
                        setmyfiles((old: any) => [...myfiles, fileName]);
                        setFile(null);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteFileHandler = (filename: string) => {
        const storageRef = ref(storage, `/Products/${filename}`);

        deleteObject(storageRef)
            .then(() => {
                console.log("file deleted successfully");
            })
            .catch((err) => {
                console.log("file not found");
                console.log(err);
            });
    };

    useEffect(() => {
        product["images"] = urlList;
        dispatch(createProduct(product));
    }, [allFiles, dispatch, myfiles, product, setAllFiles]);

    return (
        <form className="std-card m-2">
            <p className="std-font2">Upload product images</p>
            <div className="row m-2">
                <label className="std-boldFont">
          Please click on + button to upload :
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
                {myfiles.length > 0 ? (
                    <>
                        {myfiles.map((elem: any, index: number) => {
                            return (
                                <div key={index}>
                                    <a href={urlList[index]} target="_blank" rel="noreferrer">
                                        {elem}
                                    </a>
                                    <img src={urlList[index]} width="200px" height="200px"></img>
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
