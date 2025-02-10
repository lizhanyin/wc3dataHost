import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { MapHome, RootLayout, objectTypes } from "@/components/app";
import { ObjectView } from "@/components/app/objects/ObjectView";
const objectRoutes = [];
Object.keys(objectTypes).map(t => (
  objectRoutes.push({ path: t, element: <ObjectView type={t}/> })
));

{/* <EditorComponent/> */}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { index: true, element: <RootLayout /> }, 
      { path: ':build?/*', element: <RootLayout />, 
        children: [
          { index: true, element: <MapHome/>},
          ...objectRoutes,
          // { path: 'script', element: <JassView/>},
          // { path: 'map', element: <MapView/>},
          // { path: 'files',  element: <FileView/>},
        ]
      },
    ]
  }
]);
/*
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
        loader: productLoader,
        action: updateAvailabilityAction
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: 'productos/:id/editar', // ROA Pattern - Resource-orinted design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: 'productos/:id/eliminar',
        action: deleteProductAction
      }
    ]
  }

])
*/