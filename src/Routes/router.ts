interface RouteConfig {
    id: number;
    name: string;
    path: string;
    component: string//React.ComponentType<any>; // Replace with the type of your component if needed
    exact?: boolean;
}
const routes : RouteConfig[]= [
    {
        id: 1,
        name: "Login",
        path: "/",
        component: "UU", // Example component
        exact: true // If this route should be matched exactly
    }
    // Add more routes here
];

export default routes;