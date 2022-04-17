import styled from '@emotion/styled'
import { ReactChild } from 'react'

interface ModalProps {
  title: string
  children: ReactChild
  onClose: () => void
  isOpen: boolean
}

const BaseModal = (props: ModalProps) => {
  const { title, children, onClose, isOpen } = props
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <ModalHeader>
          <p>{title}</p>
          <button className="close-button" onClick={onClose}>
            닫기{' '}
          </button>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? 'flex' : 'none')};
  z-index: 100;
`

const ModalContent = styled.div`
  width: 80vw;
  height: 50vh;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 1rem;
`

const ModalHeader = styled.div`
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`
export default BaseModal
