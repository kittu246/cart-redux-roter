import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { HomeLayout,Landing,Cart } from "./pages"
import Error from "./pages/Error"
// import { loader as landingLoader } from "./pages/Landing"
// import { useDispatch,useSelector } from "react-redux"
// import { useEffect } from "react"
// import { getTotalItems } from "./feature/cart/CartSlice"

function App() {

  // const dispatch = useDispatch();
  // const {totalItems} = useSelector((state) => state.cart);
  // console.log(totalItems);

  // useEffect(() =>{

  //   dispatch(getTotalItems)

  // },[])

  const router = createBrowserRouter([

    {
      path:'/',
      element:<HomeLayout/>,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Landing/>,
          // loader:landingLoader,
          errorElement:<Error/>,
        },
        {
          path:'cart',
          element:<Cart/>,
          errorElement:<Error/>,
        }
      ]
    }

  ])
 

  return (
    <RouterProvider router={router}/>
  )
}

export default App
