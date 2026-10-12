import { useCart } from '../../context/CartContext'
import { Card, Image, Title, Description, AddButton } from './styles'

const MenuCard = ({ item }) => {
  const { addItem } = useCart()

  return (
    <Card>
      <Image src={item.imagem} alt={item.nome} />
      <Title>{item.nome}</Title>
      <Description>{item.descricao}</Description>
      <AddButton type="button" onClick={() => addItem(item)}>
        Adicionar ao carrinho
      </AddButton>
    </Card>
  )
}

export default MenuCard
