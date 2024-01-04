
import { Outlet,useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"

import { getTotalItems } from '../feature/cart/CartSlice'

const HomeLayout = () => {

  const dispatch = useDispatch();
  const {totalItems,isLoading} = useSelector((state) => state.cart);
  console.log(totalItems);

  useEffect(() =>{

    dispatch(getTotalItems())

  },[])

    // const navigation = useNavigation()
  return (
    <div className='homeLayout'>
        <Navbar/>
        {isLoading ? <div style={{fontSize:'30px',display:"flex",alignItems:'center', padding:'2rem',justifyContent:'center'}}> Loading ... </div> :<Outlet/>}
     

    </div>
  )
}

export default HomeLayout