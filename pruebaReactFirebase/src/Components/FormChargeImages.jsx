import appFirebase from "../credenciales.js";

import {getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";

const storage = getStorage(appFirebase);

const FormChargeImages = () => {

    let urlImgDownload;

    const saveInfo = async (e) => {
        console.log(urlImgDownload)
        // funcion de guardado
    }

    const fileHandler = async (e) => {
        //extraer imagen
        const imagen = e.target.files[0]

        //cargar imagen al storage
        const refImagen = ref(storage, `images/${imagen.name}`)
        await uploadBytes(refImagen, imagen)

        //obtener url de la imagen
        urlImgDownload = await getDownloadURL(refImagen)
        console.log(urlImgDownload)
    }

    return (
        <div>
            <form >
                <div className="input-group">
                    <input type="file" className="form-control" id="file"
                           aria-describedby="inputGroupFileAddon04" aria-label="Upload"
                           onChange={fileHandler}/>
                    <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={saveInfo}>Subir imagen
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FormChargeImages;