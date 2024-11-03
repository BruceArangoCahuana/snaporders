export interface IChildren{
    children:any
}


export interface IRouteConfig {
    id: number;
    name: string;
    path: string;
    component: string//React.ComponentType<any>; // Replace with the type of your component if needed
    exact?: boolean;
}