import type IRoute from '~/interfaces/IRoute';
import type IStory from '~/interfaces/IStory';
import type IChapter from '~/interfaces/IChapter';

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
        path: "/recentes",
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
        path: "",
        dropdown: true,
    },
    {
        text: "noticias",
        icon: "fa-solid:newspaper",
        path: "/noticia",
        dropdown: false,
    }
];

export const items:IStory[] = [
    {
        id: 1,
        name: "tales of demons and gods",
        chapters: 185,
        capa: "/images/capas/capa-1.jpg",
        sinopse: "No mundo de Tales Of Demons And Gods, Nie Li, o mais poderoso Espiritualista Demoníaco e estando no topo do mundo marcial, perde sua vida durante a batalha com o Imperador Sábio e as seis bestas de nível divino, e sua alma volta ao passado para quando ele tinha 13 anos. Embora ele seja o mais fraco em sua classe, com o talento mais baixo no reino da alma Vermelho – o mais fraco dos reinos – com a ajuda de seu vasto conhecimento acumulado na sua vida passada, cresce mais rápido do que todos.",
        slug: "tales-of-demons-and-gods",
        avaliable: 8.2,
        genres: [
            {
                route: "acão",
                path: "acao"
            },
            {
                route: "aventura",
                path: "aventura"
            },
            {
                route: "comédia",
                path: "comedia"
            },
            {
                route: "drama",
                path: "drama"
            },
            {
                route: "fantasia",
                path: "fantasia"
            },
            {
                route: "harem",
                path: "harem"
            },
        ]
    },
    {
        id: 2,
        name: "Dandadan",
        chapters: 138,
        capa: "/images/capas/capa-2.jpg",
        sinopse: "Depois de ser rejeitada agressivamente, Momo Ayase fica de mau humor ao se deparar com um garoto sendo intimidado. Salvo por sua bondade precipitada, o garoto obcecado por ocultismo tenta falar com ela sobre interesses sobrenaturais que ele acredita que compartilham. Rejeitando suas afirmações, Ayase proclamou que ela acredita em fantasmas, começando uma discussão entre os dois sobre o que é real. Em uma aposta para determinar quem está certo, os dois decidem visitar separadamente locais associados ao ocultismo e ao sobrenatural – Ayase visitando o primeiro e o menino visitando o último.",
        slug: "dandadan",
        avaliable: 7.8,
        genres: [
            {
                route: "acão",
                path: "acao"
            },
            {
                route: "sci-fi",
                path: "sci-fi"
            },
            {
                route: "shounen",
                path: "shounen"
            },
            {
                route: "sobrenatural",
                path: "sobrenatural"
            },
        ]
    },
    {
        id: 3,
        name: "Berserk",
        chapters: 375,
        capa: "/images/capas/capa-3.jpg",
        sinopse: "Guts, um ex-mercenário agora conhecido como o “Espadachim Negro”, está em busca de vingança. Depois de uma infância tumultuada, ele finalmente encontra alguém que respeita e acredita que pode confiar, apenas para ver tudo desmoronar quando essa pessoa tira tudo que é importante para Guts com o propósito de realizar seus próprios desejos. Agora marcado para a morte, Guts é condenado a um destino no qual ele é implacavelmente perseguido por seres demoníacos. Partindo em uma busca terrível crivada de infortúnio, Guts, armado com uma espada enorme e força monstruosa, não deixará nada pará-lo, nem mesmo a própria morte, até que ele finalmente seja capaz de tirar a cabeça daquele que o despojou – e sua ente querido – de sua humanidade.",
        slug: "berserk",
        avaliable: 9,
        genres: [
            {
                route: "acão",
                path: "acao"
            },
            {
                route: "adulto",
                path: "adulto"
            },
            {
                route: "aventura",
                path: "aventura"
            },
            {
                route: "fantasia",
                path: "fantasia"
            },
            {
                route: "seinen",
                path: "seinen"
            },
            {
                route: "sobrenatural",
                path: "sobrenatural"
            },
            {
                route: "tragédia",
                path: "tragedia"
            },
        ]
    },
    {
        id: 4,
        name: "Kagurabachi",
        chapters: 17,
        capa: "/images/capas/capa-4.jpg",
        sinopse: "Um ex-aprendiz de ferreiro embarca em um caminho sanguinário contra uma gangue de magos que tomou conta da cidade!",
        slug: "kagurabachi",
        avaliable: 7.5,
        genres: [
            {
                route: "acão",
                path: "acao"
            },
            {
                route: "magia",
                path: "magia"
            },
            {
                route: "samurai",
                path: "samurai"
            },
        ]
    },
    {
        id: 5,
        name: "Kanojo, Okarishimasu",
        chapters: 317,
        capa: "/images/capas/capa-5.jpg",
        sinopse: "Abandonado por sua namorada, o estudante universitário Kazuya Kinoshita, emocionalmente abalado, tenta apaziguar o vazio em seu coração por meio de uma namorada alugada de um aplicativo móvel. No início, Chizuru Mizuhara parece ser a garota perfeita com tudo o que ele poderia pedir: ótima aparência e uma personalidade fofa e carinhosa.Ao ver opiniões contraditórias em seu perfil após o primeiro encontro, e ainda atormentado por seu relacionamento anterior, Kazuya acredita que Chizuru está apenas brincando com os corações dos homens e deixa uma avaliação negativa para ela.",
        slug: "kanojo-okarishimasu",
        avaliable: 6.5,
        genres: [
            {
                route: "comédia",
                path: "comedia"
            },
            {
                route: "ecchi",
                path: "ecchi"
            },
            {
                route: "escolar",
                path: "escolar"
            },
            {
                route: "harem",
                path: "harem"
            },
            {
                route: "romance",
                path: "romance"
            },
            {
                route: "shounen",
                path: "shounen"
            },
            {
                route: "slice of life",
                path: "slice-of-life"
            },
        ]
    }
];

export const genres:Array<{genre:string,slug:string}> = [
    {
        genre:"ação",
        slug: 'acao',
    },
    {
        genre:"aventura",
        slug: 'aventura',
    },
    {
        genre:"drama",
        slug: 'drama',
    },
    {
        genre:"tragédia",
        slug: 'tragedia',
    },
    {
        genre:"sobrenatural",
        slug: 'sobrenatural',
    },
    {
        genre:"ação",
        slug: 'acao',
    },
    {
        genre:"sci-fi",
        slug: 'sci-fi',
    },
    {
        genre:"ação",
        slug: 'acao',
    },
    {
        genre:"shounen",
        slug: 'shounen',
    },
    {
        genre:"seinen",
        slug: 'seinen',
    },
    {
        genre:"adulto",
        slug: 'adulto',
    },
    {
        genre:"harem",
        slug: 'harem',
    },
    {
        genre:"ecchi",
        slug: 'ecchi',
    },
    {
        genre:"fantasia",
        slug: 'fantasia',
    },
    {
        genre:"magia",
        slug: 'magia',
    },
    {
        genre:"samurai",
        slug: 'samurai',
    },
    {
        genre:"ação",
        slug: 'acao',
    },
    {
        genre:"romance",
        slug: 'romance',
    },
    {
        genre:"slice of life",
        slug: 'slice-of-life',
    },
]

export const chapter:IChapter[] = [
    {
        id:1,
        serieId: 5,
        chapter: 1,
        pages: [
            "kanojo-okarishimasu-chapter1-1.jpg",
            "kanojo-okarishimasu-chapter1-2.jpg",
            "kanojo-okarishimasu-chapter1-3.jpg",
            "kanojo-okarishimasu-chapter1-4.jpg",
            "kanojo-okarishimasu-chapter1-5.jpg",
            "kanojo-okarishimasu-chapter1-6.jpg",
            "kanojo-okarishimasu-chapter1-7.jpg",
            "kanojo-okarishimasu-chapter1-8.jpg",
            "kanojo-okarishimasu-chapter1-9.jpg",
            "kanojo-okarishimasu-chapter1-10.jpg",
            "kanojo-okarishimasu-chapter1-11.jpg",
            "kanojo-okarishimasu-chapter1-12.jpg",
            "kanojo-okarishimasu-chapter1-13.jpg",
            "kanojo-okarishimasu-chapter1-14.jpg",
            "kanojo-okarishimasu-chapter1-15.jpg",
            "kanojo-okarishimasu-chapter1-16.jpg",
            "kanojo-okarishimasu-chapter1-17.jpg",
            "kanojo-okarishimasu-chapter1-18.jpg",
            "kanojo-okarishimasu-chapter1-19.jpg",
            "kanojo-okarishimasu-chapter1-20.jpg",
            "kanojo-okarishimasu-chapter1-21.jpg",
            "kanojo-okarishimasu-chapter1-22.jpg",
            "kanojo-okarishimasu-chapter1-23.jpg",
            "kanojo-okarishimasu-chapter1-24.jpg",
            "kanojo-okarishimasu-chapter1-25.jpg",
            "kanojo-okarishimasu-chapter1-26.jpg",
            "kanojo-okarishimasu-chapter1-27.jpg",
            "kanojo-okarishimasu-chapter1-28.jpg",
            "kanojo-okarishimasu-chapter1-29.jpg",
            "kanojo-okarishimasu-chapter1-30.jpg",
            "kanojo-okarishimasu-chapter1-31.jpg",
            "kanojo-okarishimasu-chapter1-32.jpg",
            "kanojo-okarishimasu-chapter1-33.jpg",
            "kanojo-okarishimasu-chapter1-34.jpg",
            "kanojo-okarishimasu-chapter1-35.jpg",
            "kanojo-okarishimasu-chapter1-36.jpg",
            "kanojo-okarishimasu-chapter1-37.jpg",
            "kanojo-okarishimasu-chapter1-38.jpg",
            "kanojo-okarishimasu-chapter1-39.jpg",
            "kanojo-okarishimasu-chapter1-40.jpg",
            "kanojo-okarishimasu-chapter1-41.jpg",
            "kanojo-okarishimasu-chapter1-42.jpg",
            "kanojo-okarishimasu-chapter1-43.jpg",
            "kanojo-okarishimasu-chapter1-44.jpg",
            "kanojo-okarishimasu-chapter1-45.jpg",
            "kanojo-okarishimasu-chapter1-46.jpg",
            "kanojo-okarishimasu-chapter1-47.jpg",
            "kanojo-okarishimasu-chapter1-48.jpg",
            "kanojo-okarishimasu-chapter1-49.jpg",
            "kanojo-okarishimasu-chapter1-50.jpg",
            "kanojo-okarishimasu-chapter1-51.jpg",
            "kanojo-okarishimasu-chapter1-52.jpg",
            "kanojo-okarishimasu-chapter1-53.jpg",
            "kanojo-okarishimasu-chapter1-54.jpg",
            "kanojo-okarishimasu-chapter1-55.jpg"
        ],
    }
];