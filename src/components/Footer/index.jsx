import footerImage from '../../assets/footer-figma.png'
import { FooterArea, FooterImage } from './styles'

const Footer = () => (
  <FooterArea>
    <FooterImage
      src={footerImage}
      alt="efood - redes sociais e informações da plataforma"
    />
  </FooterArea>
)

export default Footer
