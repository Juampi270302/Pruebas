import appFirebase from "../credenciales.js";

import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {useEffect, useState} from "react";
import {set} from "react-hook-form";

const storage = getStorage(appFirebase);

const FormChargeImages = () => {



    const [files, setFiles] = useState([])
    const [peso, setPeso] = useState(0)
    const [filesUrls, setFilesUrls] = useState([])

    // useEffect(() => {
    //     files.forEach((file) => {
    //         setPeso(peso + (file.size / 1024 / 1024))
    //     })
    // }, [files]);

    // useEffect(() => {
    //     if (peso > 10) {
    //         alert("El peso de las imagenes no puede superar los 10MB")
    //     }
    // }, [peso]);

    const saveInfo = async () => {
        for (const file of files) {

             if (peso > 10) {
                 alert(`El peso de las imagenes es mayor a 10 MB. Peso actual: ${peso}`)
                 return
             }

            //cargar imagen al storage

            const refImagen = ref(storage, `images/${file.name}`)
            await uploadBytes(refImagen, file)

            //obtener url de la imagen y guardarlas en el array de imagenes
            let urlImgDownload = await getDownloadURL(refImagen)
            setFilesUrls([...filesUrls, urlImgDownload])
            setFiles([])
            setPeso(0)
            console.log(urlImgDownload)
        }
    }

    const fileHandler = async (e) => {

        //extraer imagen e indice donde se coloca la nueva imagen (por si se modifica alguna)
        const indice = e.target.id
        const imagen = e.target.files[0]
        const types = ["image/jpeg", "image/png", "image/jpg"]

        if (imagen === undefined) {
            return
        }

        if (!types.includes(imagen.type)) {
            alert("El archivo no es una imagen")
            return
        }

        console.log(imagen.type)

        //Aca valido si esta tratando de modificar una imagen
        if (files[indice - 1] !== undefined) {
            const imagenActual = files[indice - 1]
            // Aca valido si el nuevo peso superaria los 10mb, si lo supera, no se guarda la imagen
            if ((peso - (imagenActual.size / 1024 / 1024) + (imagen.size / 1024 / 1024)) > 10){
                alert("El peso de las imagenes con la nueva imagen no puede superar los 10MB")
                return
            } else {
                // Aca si el peso con la nueva imagen es valido, actualizo el peso
                setPeso(peso - (imagenActual.size / 1024 / 1024) + (imagen.size / 1024 / 1024))
            }
        // Aca valido si el peso con una nueva imagen es valido
        } else if ( peso + (imagen.size / 1024 / 1024) > 10) {
            alert("El peso de las imagenes no puede superar los 10MB")
            return
        // En caso de que no se este modificando una imagen y el peso sea valido, actualizo el peso
        } else {
            setPeso(peso + (imagen.size / 1024 / 1024))
        }

        //guardar imagen en el estado
        const newFiles = [...files]
        newFiles[indice - 1] = imagen
        setFiles(newFiles)
    }

    return (
        <div className="row d-flex justify-content-center">
                <form>
                    <div className="input-group">
                        <div className="row">
                            <input type="file" className="form-control" id="1"
                                   aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                   onChange={fileHandler}/>
                        </div>
                        <div className="row">
                            <input type="file" className="form-control" id="2"
                                   aria-describedby="inputGroupFileAddon04" aria-label="Upload" placeholder="A"
                                   onChange={fileHandler}/>
                        </div>
                        <div className="row">
                            <input type="file" className="form-control" id="3"
                                   aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                                   onChange={fileHandler} />
                        </div>
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04"
                        onClick={saveInfo}>Subir imagen
                        </button>
                    </div>
                </form>
        </div>
    );
};

export default FormChargeImages;