import { getDownloadURL, ref, uploadBytesResumable,deleteObject } from 'firebase/storage'
import { storage } from '../../firebaseSetup'

import { v4 as uuidv4 } from 'uuid';

const allowedExtensions = ['png', 'jpg', 'jpeg', 'svg', 'gif']

function getUniqueName(extension) {
    return uuidv4() + "." + extension
}

export function uploadFiles(files) {
    if (!files) { return }
    for (let i = 0; i < files.length; i++) {
        let file = files[i]
        console.log(file.size)
        let extension = file.name.split('.')[1].split(" ")[0]

        if (allowedExtensions.includes(extension)) {
            if (file.size <= 1*1024*1024) {
                let fileName = getUniqueName(extension)
                const storageRef = ref(storage, `/Products/${fileName}`)

                const uploadTask = uploadBytesResumable(storageRef, file)

                uploadTask.on("state_changed", (snapshot) => {
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                }, (err) => {
                    console.log(err)
                }, () => {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then(url => {
                            console.log(url)
                        })
                })
            }else{
                console.log("file size too big")
                return
            }
        } else {
            console.log("file format not allowed")
            return
        }
    }
}

export function deleteFile(filename){
    if(!filename){return}

    const storageRef = ref(storage, `/Products/${filename}`)

    deleteObject(storageRef).then(() => {
        console.log("file deleted successfully")
      }).catch((err) => {
        console.log("file not found")
        console.log(err)
      });
}