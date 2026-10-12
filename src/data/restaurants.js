import sushiImage from '../assets/sushi.jpg'
import pastaImage from '../assets/pasta.jpg'
import pizzaImage from '../assets/pizza.jpg'

const sushiDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const italianDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

const pizzaDescription =
  'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

export const restaurants = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    categoria: 'Japonesa',
    destacado: true,
    avaliacao: 4.9,
    imagem: sushiImage,
    descricao: sushiDescription
  },
  ...Array.from({ length: 5 }, (_, index) => ({
    id: index + 2,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    destacado: false,
    avaliacao: 4.6,
    imagem: pastaImage,
    descricao: italianDescription
  }))
]

const pizzaMenu = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  nome: 'Pizza Marguerita',
  descricao: pizzaDescription,
  imagem: pizzaImage,
  preco: 60.9,
  porcao: '2 a 3 pessoas'
}))

export const restaurantProfiles = {
  1: {
    id: 1,
    nome: 'Hioki Sushi',
    categoria: 'Japonesa',
    hero: sushiImage,
    cardapio: pizzaMenu
  },
  2: {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    hero: pastaImage,
    cardapio: pizzaMenu
  }
}

export const getProfileByRestaurantId = (id) => {
  const numericId = Number(id)
  if (numericId === 1) return restaurantProfiles[1]
  if (numericId >= 2 && numericId <= 6) return restaurantProfiles[2]
  return null
}
