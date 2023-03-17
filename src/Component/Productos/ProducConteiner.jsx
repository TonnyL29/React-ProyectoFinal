import { useParams } from 'react-router-dom';
import './Productos.css';
import ProducDetail from './ProducDetail'
import { useEffect, useState } from 'react';
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore';

const Productos = () => {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams();
    const categorias = ['hombres', 'mujeres', 'joyeria', 'electronica'];
    const categorys = ["men's clothing","women's clothing", "jewelery","electronics"]
    const idFilter = categorias.indexOf(categoryId);
    const categoria = categorys[idFilter];
 useEffect(() =>{
    const db = getFirestore(); 
    const itemCollection = collection(db, "item");
    const q = categoryId ? query(itemCollection, where("category", "==", categoria)) : itemCollection;
     getDocs(q).then(Prod => {
         setItems(Prod.docs.map(element => ({id:element.id, ...element.data()})))
     })
}, [categoryId, categoria]);

return(
        <div className ='conteiner mt-4' id=''>
            <ProducDetail Prod={items}/>
       </div>
    )
}

export default Productos;