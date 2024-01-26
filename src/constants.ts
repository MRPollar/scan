import type IRoute from '~/interfaces/IRoute';
import type IStory from '~/interfaces/IStory';

export const routes: IRoute[] = [
    {
        text: "mangás",
        icon: "fa-solid:book",
        path: "/mangas",
        dropdown: false,
    },
    {
        text: "recentes",
        icon: "pepicons-pop:reload",
        path: "recentes",
        dropdown: false,
    },
    {
        text: "mais lidos",
        icon: "basil:fire-solid",
        path: "/mais-lidos",
        dropdown: false,
    },
    {
        text: "tipos",
        icon: "bxs:down-arrow",
        path: "",
        dropdown: true,
    },
    {
        text: "noticias",
        icon: "fa-solid:newspaper",
        path: "/noticias",
        dropdown: false,
    }
];

export const items:IStory[] = [
    {
        id: 1,
        name: "tales of demons and gods",
        chapters: 185,
        capa: "https://img.mangaschan.com/uploads/manga-images/t/tales-of-demons-and-gods/Tales%20Of%20Demons%20And%20Gods%20mangaschan.webp",
        sinopse: "No mundo de Tales Of Demons And Gods, Nie Li, o mais poderoso Espiritualista Demoníaco e estando no topo do mundo marcial, perde sua vida durante a batalha com o Imperador Sábio e as seis bestas de nível divino, e sua alma volta ao passado para quando ele tinha 13 anos. Embora ele seja o mais fraco em sua classe, com o talento mais baixo no reino da alma Vermelho – o mais fraco dos reinos – com a ajuda de seu vasto conhecimento acumulado na sua vida passada, cresce mais rápido do que todos.",
        slug: "tales-of-demons-and-gods",
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
        capa: "https://mangaschan.net/wp-content/uploads/Dandadan-Mangaschan.webp",
        sinopse: "Depois de ser rejeitada agressivamente, Momo Ayase fica de mau humor ao se deparar com um garoto sendo intimidado. Salvo por sua bondade precipitada, o garoto obcecado por ocultismo tenta falar com ela sobre interesses sobrenaturais que ele acredita que compartilham. Rejeitando suas afirmações, Ayase proclamou que ela acredita em fantasmas, começando uma discussão entre os dois sobre o que é real. Em uma aposta para determinar quem está certo, os dois decidem visitar separadamente locais associados ao ocultismo e ao sobrenatural – Ayase visitando o primeiro e o menino visitando o último.",
        slug: "dandadan",
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
        capa: "https://img.mangaschan.com/uploads/manga-images/b/berserk//Berserk%20mangaschan.webp",
        sinopse: "Guts, um ex-mercenário agora conhecido como o “Espadachim Negro”, está em busca de vingança. Depois de uma infância tumultuada, ele finalmente encontra alguém que respeita e acredita que pode confiar, apenas para ver tudo desmoronar quando essa pessoa tira tudo que é importante para Guts com o propósito de realizar seus próprios desejos. Agora marcado para a morte, Guts é condenado a um destino no qual ele é implacavelmente perseguido por seres demoníacos. Partindo em uma busca terrível crivada de infortúnio, Guts, armado com uma espada enorme e força monstruosa, não deixará nada pará-lo, nem mesmo a própria morte, até que ele finalmente seja capaz de tirar a cabeça daquele que o despojou – e sua ente querido – de sua humanidade.",
        slug: "berserk",
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
        capa: "https://img.mangaschan.com/uploads/manga-images/k/kagurabachi/thumbnail.webp",
        sinopse: "Um ex-aprendiz de ferreiro embarca em um caminho sanguinário contra uma gangue de magos que tomou conta da cidade!",
        slug: "kagurabachi",
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
        capa: "https://mangaschan.net/wp-content/uploads/Kanojo-Okarishimasu-Mangaschan.webp",
        sinopse: "Abandonado por sua namorada, o estudante universitário Kazuya Kinoshita, emocionalmente abalado, tenta apaziguar o vazio em seu coração por meio de uma namorada alugada de um aplicativo móvel. No início, Chizuru Mizuhara parece ser a garota perfeita com tudo o que ele poderia pedir: ótima aparência e uma personalidade fofa e carinhosa.Ao ver opiniões contraditórias em seu perfil após o primeiro encontro, e ainda atormentado por seu relacionamento anterior, Kazuya acredita que Chizuru está apenas brincando com os corações dos homens e deixa uma avaliação negativa para ela.",
        slug: "kanojo-okarishimasu",
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