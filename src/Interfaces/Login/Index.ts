export interface IChildren {
    children: any
}


export interface IRouteConfig {
    id: number;
    name: string;
    path: string;
    component: string
    exact?: boolean;
}

export interface IProduct {
    id: number;
    name: string;
    price: number;
    detail?: string
    status?: string;
    url?:string
    category?:string
}

export  interface IPaginate {
    total: number,
	page: number,
    lastPage: number
}