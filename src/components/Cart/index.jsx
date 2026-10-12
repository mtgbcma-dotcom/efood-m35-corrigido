import { useEffect } from 'react'
import { useCart } from '../../context/CartContext'
import trashIcon from '../../assets/trash.png'
import {
  Overlay,
  Drawer,
  Empty,
  Items,
  Item,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  RemoveButton,
  Summary,
  TotalRow,
  ContinueButton
} from './styles'

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)

const Cart = () => {
  const { items, total, isOpen, closeCart, removeItem } = useCart()

  useEffect(() => {
    if (!isOpen) return undefined
    document.body.classList.add('cart-open')
    const onKeyDown = (event) => event.key === 'Escape' && closeCart()
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.classList.remove('cart-open')
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeCart])

  if (!isOpen) return null

  return (
    <Overlay onMouseDown={(event) => event.target === event.currentTarget && closeCart()}>
      <Drawer role="dialog" aria-modal="true" aria-label="Carrinho de compras">
        {items.length === 0 ? (
          <Empty>O carrinho está vazio.</Empty>
        ) : (
          <>
            <Items>
              {items.map((item) => (
                <Item key={item.cartItemId}>
                  <ItemImage src={item.imagem} alt={item.nome} />
                  <ItemInfo>
                    <ItemName>{item.nome}</ItemName>
                    <ItemPrice>{formatPrice(item.preco)}</ItemPrice>
                  </ItemInfo>
                  <RemoveButton
                    type="button"
                    aria-label={`Remover ${item.nome}`}
                    onClick={() => removeItem(item.cartItemId)}
                  >
                    <img src={trashIcon} alt="" />
                  </RemoveButton>
                </Item>
              ))}
            </Items>
            <Summary>
              <TotalRow>
                <strong>Valor total</strong>
                <strong>{formatPrice(total)}</strong>
              </TotalRow>
              <ContinueButton type="button" onClick={closeCart}>
                Continuar com a entrega
              </ContinueButton>
            </Summary>
          </>
        )}
      </Drawer>
    </Overlay>
  )
}

export default Cart
