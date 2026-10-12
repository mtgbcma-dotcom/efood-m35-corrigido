import Footer from '../../components/Footer'
import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { restaurants } from '../../data/restaurants'
import { Main, Grid } from './styles'

const Home = () => (
  <>
    <Header />
    <Main>
      <Grid className="container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </Grid>
    </Main>
    <Footer />
  </>
)

export default Home
