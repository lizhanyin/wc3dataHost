import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import { MapHome, RootLayout, objectTypes, ObjectView } from "@/components/app";
import { FileView } from '@/components/app/files/FileView';
// import JassView from '@/components/app/jass/JassView';

const objectRoutes = [];
Object.keys(objectTypes).map(t => (
  objectRoutes.push({ 
    path: t, 
    element: <ObjectView type={t}/>,
    children: [
      { path: ":id?", element: <ObjectView type={t}/>}
    ]
  })
));

{/* <EditorComponent/> */}

export const router = createBrowserRouter([
  {
    path: "/*",
    element: <App/>,
    children: [
      { index: true, element: <RootLayout /> }, 
      { path: ":build?/*", element: <RootLayout />, children: [
          { index: true, element: <MapHome/>},
          ...objectRoutes,
          // { path: "script", element: <JassView/>},
          { path: "map", element: <MapHome/>},
          { path: "files?/*",  element: <FileView/>, children: [
            { path: ":id?",  element: <FileView/>}
          ]},
        ]
      },
    ]
  }
]);
/*
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
        loader: productLoader,
        action: updateAvailabilityAction
      },
      {
        path: "productos/nuevo",
        element: <NewProduct />,
        action: newProductAction
      },
      {
        path: "productos/:id/editar", // ROA Pattern - Resource-orinted design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction
      },
      {
        path: "productos/:id/eliminar",
        action: deleteProductAction
      }
    ]
  }

])
*/