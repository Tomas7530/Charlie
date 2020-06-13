import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const products = [
            //ADULTES
            {
                category: "adults",
                name: "Trousse simple",
                nickname: "trousse-simple",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "adults",
                name: "Trousse plate",
                nickname: "trousse-plate",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "adults",
                name: "Trousse berlingot",
                nickname: "trousse-berlingot",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "adults",
                name: "Trousse de toilette",
                nickname: "trousse-toilette",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "adults",
                name: "Trousse de toilette rabat-rangement",
                nickname: "trousse-toilette-rabat",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "adults",
                name: "Vide poche",
                nickname: "vide-poche",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            },

            //ENFANTS
            {
                category: "kids",
                name: "Protège carnet de santé",
                nickname: "protege-carnet-sante",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Trousse à langer",
                nickname: "trousse-langer",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Housse de table à langer",
                nickname: "housse-table-langer",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Barboteuse",
                nickname: "barboteuse",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Sortie de bain",
                nickname: "sortie-bain",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Tour de lit",
                nickname: "tour-lit",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Mobile bébé",
                nickname: "mobile-bebe",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Bavoir",
                nickname: "bavoir",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Doudou",
                nickname: "doudou",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Hochet",
                nickname: "hochet",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "kids",
                name: "Vide poche",
                nickname: "vide-poche",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            },
            //PELUCHES
            {
                category: "plush",
                name: "Lapin",
                nickname: "lapin",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "plush",
                name: "Chat",
                nickname: "chat",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "plush",
                name: "Tortue",
                nickname: "tortue",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "plush",
                name: "Hippopotame",
                nickname: "hippopotame",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "plush",
                name: "Rhinocéros",
                nickname: "rhinoceros",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "plush",
                name: "Girafe",
                nickname: "girafe",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            },
            //ACCESSOIRES
            {
                category: "others",
                name: "Trousse simple",
                nickname: "trousse-1",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }, {
                category: "others",
                name: "Trousse simple",
                nickname: "trousse-2",
                description: "Mauris aliquet magna magna sed nunc rhoncus pharetra.Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsumdolor. Nullam et orci eu lorliquet magna magna sed nunc rhoncus pharetra Pellentesque condimentum sem.",
                price: 50,
                img: "/images/products/product.jpg",
                alt: "produit1",
                option: 2
            }
        ]

let store = new Vuex.Store({
    state: {
        products: products, 
        select: [],
        category: [],
        name: []
    },
    mutations: {
        getProduct (){
            var state = this.state,
                name = state.name,
                select = state.select
            
            for(const product in products) {
                if(products[product].nickname === name){
                select.pop()
                select.push(products[product])
                }
            }
            return
        }
    },
    actions: {

    }
})


global.store = store

export default store