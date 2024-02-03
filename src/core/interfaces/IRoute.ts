type DropDown = {
    path:string,
    name:string,
}

export default interface IRoute{
    readonly text:string;
    readonly icon:string;
    readonly path?:string;
    readonly dropdown:boolean;
    dropdowList?:DropDown[]

}