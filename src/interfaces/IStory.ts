import type ISubRoute from '~/interfaces/ISubRoute';

export default interface IStory{
    id?:number;
    name?:string;
    chapters?:number,
    capa?:string;
    sinopse?:string;
    slug?:string;
    genres?:ISubRoute[];
}