import { Entity, AlbumDescriptons } from './AlbumEntity.styles'
import { AlbumEntityPropType } from './AlbumEntity.propType'
import BaseModal from '@components/common/Modal'
import { useState } from 'react'

const AlbumEntity = (props: AlbumEntityPropType) => {
  const { name, id, description } = props
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [discriptions, setDescriptions] = useState(description)

  const handleEdit = () => {
    console.log('edit', id)
    setIsEditModalOpen(true)
  }
  const handleDelete = () => {
    console.log('delete')
  }

  const handleClose = () => {
    setIsEditModalOpen((isEditModalOpen) => !isEditModalOpen)
  }
  const handleEditConfirm = () => {
    setIsEditModalOpen(false)
  }

  return (
    <>
      <Entity role="button" {...props}>
        <div className="button-container">
          <button onClick={handleEdit}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
        <div>{name}</div>
      </Entity>
      <BaseModal
        isOpen={isEditModalOpen}
        title={name}
        onClose={handleClose}
        onConfirm={handleEditConfirm}
      >
        <AlbumDescriptons>
          <textarea
            name=""
            id=""
            value={discriptions}
            onChange={(e) => setDescriptions(e.target.value)}
          />
        </AlbumDescriptons>
      </BaseModal>
    </>
  )
}

export default AlbumEntity
