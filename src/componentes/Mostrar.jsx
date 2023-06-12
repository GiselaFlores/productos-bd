import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import {db} from "../firebaseConfig/firebase";
import {async} from '@firebase/util';

const MySwal = withReactContent(Swal);


export const Mostrar = () => {

    //1 configuración de los hook

    const [productos, setProductos] = useState([]);

    //2 referenciar la db de firebase

    const productosCollection = collection(db, "Productos");

    //3 asincronismo a los datos

    const getProductos = async () => {
        const data = await getDocs(productosCollection);
        //console.log(data.docs);

        setProductos(
            data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        );
        console.log(productos);
    }

{/*    //4 delete documento

    const deleteProducto = async (id)=>{
        const productoDoc = doc(db, "Productos", id);
        await deleteDoc(productoDoc);
        getProductos();
    }

    //5 configuración del sweet alert

    const confirmDelete = (id)=>{
        Swal.fire({
            title: 'Está seguro de borrar la tarea?',
            text: "Seguro de querer eliminarla!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya lo borraste!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteProducto(id);
                Swal.fire(
                'Borrado!',
              )
            }
          })
    }*/}

    //6 definición de useEffect

    useEffect(()=>{
        getProductos();
    }, [])


  return (
    <div>Hola</div>
  )
}

export default Mostrar;