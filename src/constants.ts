import type IRoute from '~/core/interfaces/IRoute';

export const routes: IRoute[] = [
    {
        text: "mangás",
        icon: "fa-solid:book",
        path: "/manga",
        dropdown: false,
    },
    {
        text: "recentes",
        icon: "pepicons-pop:reload",
        path: "/ultimas-atualizacoes/1",
        dropdown: false,
    },
    {
        text: "mais lidos",
        icon: "basil:fire-solid",
        path: "/manga/?ordem=popular",
        dropdown: false,
    }
];

export const genres:Array<{genre:string, slug:string}> = []

export const host = 'http://192.168.11.7/panel-scan/api/'

