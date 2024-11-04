import { IRouteConfig } from "../Interfaces";

const routesConfig : IRouteConfig[]= [
    {
        id: 1,
        name: "Productos",
        path: "product",
        component: "UU", 
        exact: true 
    },
    {
        id: 2,
        name: "Ordenes",
        path: "orders",
        component: "UU", 
        exact: true 
    },
    {
        id: 3,
        name: "Ventas",
        path: "sales",
        component: "UU", 
        exact: true 
    }
    
];

export default routesConfig;