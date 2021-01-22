import theme from '../theme'
import hexToRgb from '../../utils/hexToRgb'

export const CloseButtonUI = styled('a')`
  display: block;
  margin: 0 auto;
  width: 100%;
  text-align: center;
`

export const ContainerUI = styled('div')`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(${hexToRgb(theme.colors.black)}, 0.8);
  z-index: 999;
  padding: ${theme.space[3]};
`

export const ModalUI = styled('div')`
  padding: ${theme.space[3]};
  position: absolute;
  z-index: 99999;
  width: 500px;
  background: white;
  border: 1px solid #ccc;
  transition: 1.1s ease-out;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
`
