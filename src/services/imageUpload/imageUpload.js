import { getDownloadURL, ref, uploadBytesResumable, deleteObject,getStorage,uploadBytes } from 'firebase/storage'
import { storage } from '../../firebaseSetup'
import { v4 as uuidv4 } from 'uuid';

const allowedExtensions = ['png', 'jpg', 'jpeg', 'svg', 'gif']

function getUniqueName(extension) {
    return uuidv4() + "." + extension
}

export async function uploadFiles(files) {
    let fileUrls = []
    console.log(files)
    if (!files) { return }
    for (let i = 0; i < files.length; i++) {
        let file = files[i]
        console.log(file.size)
        let extension = file.name.split('.')[1].split(" ")[0]

        if (allowedExtensions.includes(extension)) {
            if (file.size <= 1 * 1024 * 1024) {
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
                            fileUrls.push(url)

                        }).catch(err => {
                            console.log(err)
                        })
                })
            } else {
                console.log("file size too big")
                return false
            }
        } else {
            console.log("file format not allowed")
            return false
        }
    }
    await setTimeout(() => {
        return fileUrls
    }, 2000)

}

export async function uploadFile(file) {
    if (!file) { return }
    console.log(file.size)
    let extension = file.name.split('.')[1].split(" ")[0]

    if (allowedExtensions.includes(extension)) {
        if (file.size <= 1 * 1024 * 1024) {
            let fileName = getUniqueName(extension)
            const storage = getStorage();
            const storageRef = ref(storage, `Product/${fileName}`);

            let fileUrl = ""
            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, file).then(async(snapshot) => {
                console.log('Uploaded a blob or file!');
                getDownloadURL(snapshot.ref).then(url=>{
                    fileUrl=url
                }).catch(err=>{
                    console.log(err)
                })
            }).then(()=>{
                console.log(fileUrl)
            })
            // return fileUrl

        } else {
            console.log("file size too big")
            return false
        }
    } else {
        console.log("file format not allowed")
        return false
    }
}

export function deleteFile(filename) {
    if (!filename) { return }

    const storageRef = ref(storage, `/Products/${filename}`)

    deleteObject(storageRef).then(() => {
        console.log("file deleted successfully")
    }).catch((err) => {
        console.log("file not found")
        console.log(err)
    });
}