import './Productos.css';
import ProducDetail from './ProducDetail'
import { useEffect, useState } from 'react';
import { collection, getFirestore, getDocs } from 'firebase/firestore';

const Productos = () => {
     const [items, setItems] = useState([]);

 useEffect(() =>{
    const db = getFirestore(); 
    const itemCollection = collection(db, "item");
     getDocs(itemCollection).then(Prod => {
         setItems(Prod.docs.map(element => ({id:element.id, ...element.data()})))
     })
}, []);

return(
        <div className ='conteiner mt-4' id=''>
            <ProducDetail Prod={items}/>
       </div>
    )
}

export default Productos;