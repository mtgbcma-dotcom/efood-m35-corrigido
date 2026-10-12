import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

const STORAGE_KEY = 'efood-m35-cart'
const CartContext = createContext(null)

const loadInitialItems = () => {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadInitialItems)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // A aplicação continua funcionando mesmo se o navegador bloquear storage.
    }
  }, [items])

  const addItem = useCallback((product) => {
    setItems((current) => [
      ...current,
      {
        ...product,
        cartItemId: `${product.id}-${Date.now()}-${Math.random()}`
      }
    ])
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((cartItemId) => {
    setItems((current) =>
      current.filter((item) => item.cartItemId !== cartItemId)
    )
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])

  const total = useMemo(
    () => items.reduce((sum, item) => sum + Number(item.preco || 0), 0),
    [items]
  )

  const value = useMemo(
    () => ({
      items,
      count: items.length,
      total,
      isOpen,
      addItem,
      removeItem,
      openCart,
      closeCart
    }),
    [items, total, isOpen, addItem, removeItem, openCart, closeCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart precisa ser usado dentro de CartProvider')
  }

  return context
}
