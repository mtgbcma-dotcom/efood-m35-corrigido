import { Navigate, useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import Cart from '../../components/Cart'
import logo from '../../assets/logo.png'
import pattern from '../../assets/profile-pattern.png'
import italianHero from '../../assets/profile-hero.jpg'
import { getProfileByRestaurantId } from '../../data/restaurants'
import { useCart } from '../../context/CartContext'
import {
  ProfileHeader,
  HeaderContent,
  Back,
  Logo,
  CartButton,
  Hero,
  HeroBackground,
  HeroOverlay,
  HeroContent,
  Category,
  RestaurantName,
  Main,
  MenuGrid
} from './styles'

const Restaurant = () => {
  const { id } = useParams()
  const { count, openCart } = useCart()

  if (!id) return <Navigate to="/" replace />

  const restaurant = getProfileByRestaurantId(id)
  if (!restaurant) return <Navigate to="/" replace />

  const isItalianReference = Number(id) !== 1

  return (
    <>
      <ProfileHeader $pattern={pattern}>
        <HeaderContent className="container">
          <Back to="/">Restaurantes</Back>
          <Logo src={logo} alt="efood" />
          <CartButton type="button" onClick={openCart}>
            {count} produto(s) no carrinho
          </CartButton>
        </HeaderContent>
      </ProfileHeader>

      {isItalianReference ? (
        <Hero aria-label="Italiana - La Dolce Vita Trattoria">
          <HeroBackground src={italianHero} alt="" />
          <span className="sr-only">Italiana</span>
          <h1 className="sr-only">La Dolce Vita Trattoria</h1>
        </Hero>
      ) : (
        <Hero $image={restaurant.hero}>
          <HeroOverlay />
          <HeroContent className="container">
            <Category>{restaurant.categoria}</Category>
            <RestaurantName>{restaurant.nome}</RestaurantName>
          </HeroContent>
        </Hero>
      )}

      <Main>
        <MenuGrid className="container">
          {restaurant.cardapio.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </MenuGrid>
      </Main>

      <Footer />
      <Cart />
    </>
  )
}

export default Restaurant
