import Entity from './AlbumEntity.styles'
import { AlbumEntityPropType } from './AlbumEntity.propType'
import BaseModal from '@components/common/Modal'
import { useState } from 'react'

const AlbumEntity = (props: AlbumEntityPropType) => {
  const { name, id } = props
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const handleEdit = () => {
    console.log('edit', id)
    setIsEditModalOpen(true)
  }
  const handleDelete = () => {
    console.log('delete')
  }

  const handleClose = () => {}
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
        title="수정하기"
        onClose={() =>
          setIsEditModalOpen((isEditModalOpen) => !isEditModalOpen)
        }
      >
        <div></div>
      </BaseModal>
    </>
  )
}

export default AlbumEntity
