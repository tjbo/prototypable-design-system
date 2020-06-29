import { ButtonUI, ContainerUI, StickyUI } from './stickyBox.css'
import Title from '../title'
import theme from '../../theme'
import Modal from '../modal'
import { onHideModal, onShowModal } from '../body/modal'

class StickyBox extends React.Component {
  state = {
    isOpen: false,
  }

  componentDidMount() {}

  toggleOpen = (bool) => {
    this.setState({ isOpen: bool }, () => {
      if (this.state.isOpen) {
        onShowModal()
      } else {
        onHideModal()
      }
    })
  }

  render() {
    const { children } = this.props
    return (
      <ContainerUI top={this.state.top}>
        <StickyUI>
          {this.state.isOpen === true ? (
            <Modal closeModal={() => this.toggleOpen(false)}>{children}</Modal>
          ) : (
            <ButtonUI onClick={(e) => this.toggleOpen(!this.state.isOpen)}>
              <img
                src="https://images.prismic.io/cresentlenders/72b74767-cbd6-4360-a633-4b36f8eea7d4_030-target.png?auto=compress,format"
                width="50"
              />
              <Title as="h5" color="success" spaceAfter="none">
                SUBSCRIBE AND SUCCEED
              </Title>
            </ButtonUI>
          )}
        </StickyUI>
      </ContainerUI>
    )
  }
}

export default StickyBox
