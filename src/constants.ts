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
        path: "/ultimas-atualizacoes",
        dropdown: false,
    },
    {
        text: "mais lidos",
        icon: "basil:fire-solid",
        path: "/manga/?ordem=popular",
        dropdown: false,
    },
    {
        text: "tipos",
        icon: "iconamoon:arrow-down-2-duotone",
        dropdown: true,
        dropdowList: [
            {
                name:"mangá",
                path:"manga",
            },
            {
                name:"one-shit",
                path:"one-shit",
            },
            {
                name:"doujinshi",
                path:"doujinshi",
            },
            {
                name:"light-novel",
                path:"light novel",
            },
            {
                name:"manhwa",
                path:"manhwa",
            },
            {
                name:"manhua",
                path:"manhua",
            },
            {
                name:"comic",
                path:"comic",
            },
        ]
    }
];

export const genres:Array<{genre:string, slug:string}> = []

export const host = 'http://192.168.11.7/panel-scan/api/'

