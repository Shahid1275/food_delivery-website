// import React from 'react'
// import './List.css'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { useEffect,useState } from 'react'
// import { IoMdTrash } from "react-icons/io";

// const List = ({url}) => {
//     const [list,setList] = useState([])

//     const fetchList = async () =>{
//         const response = await axios.get(`${url}/api/food/list`)
//         console.log(response.data);
//          if(response.data.success){
//             setList(response.data.data)
//         }
//         else{
//             toast.error("Something went wrong")
//         }

//     }
//     const removeFromCart = async(foodId) => {
//         console.log(foodId);
//     const response = axios.post(`${url}/api/food/remove`,{id:foodId});
//     await fetchList();
//     if(response.data.success){
//         toast.success(response.data.message)
//     }
//     else{
//         toast.error("Something went wrong")
//     }


//     };
//     useEffect(()=>{
//         fetchList()
//     },[])
//   return (
//     <div className='list add flex-col'>
//       <p>All Foods List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Price</b>
//           <b>Category</b>
//           <b>Action</b>
//         </div>
//         {list.map((item,index)=>{
//             return(
//                 <div className="list-table-format" key={index}>
//                     <img src={`${url}/images/`+item.image} alt="" />
//                     <p>{item.name}</p>
//                     <p>{item.price}</p>
//                     <p>{item.category}</p>
//                     <p onClick={() => removeFromCart(item._id)}><IoMdTrash /></p>
//                 </div>
//             )
//         })}
//       </div>
//     </div>
//   )
// }

// export default List
import React from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { IoMdTrash } from "react-icons/io";

const List = ({ url }) => {
    const [list, setList] = useState([])

    // Fetch the list of foods from the backend
    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            console.log(response.data);
            if (response.data.success) {
                setList(response.data.data);
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to fetch food list");
        }
    }

    // Remove a food item from the list (cart)
    const removeFromCart = async (foodId) => {
        try {
            const response = await axios.post(`${url}/api/food/remove`, { id: foodId }); // Await added here
            await fetchList(); // Fetch the updated list after removing the item

            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            toast.error("Failed to remove item from cart");
        }
    };

    useEffect(() => {
        fetchList();
    }, []);

    return (
        <div className='list add flex-col'>
            <p>All Foods List</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Price</b>
                    <b>Category</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div className="list-table-format" key={index}>
                            <img src={`${url}/images/` + item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.category}</p>
                            <p onClick={() => removeFromCart(item._id)}><IoMdTrash /></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List;
