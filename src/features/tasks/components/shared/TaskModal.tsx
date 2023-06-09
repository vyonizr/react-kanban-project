import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { Task, CSSProperties } from '../../../../types'
import TaskForm from './TaskForm'

interface TaskModalProps {
  headingTitle: string
  type: string
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>
  task?: Task
  defaultProgressOrder: number
}

const TaskModal = ({
  headingTitle,
  type,
  setIsModalOpen,
  setIsMenuOpen,
  task,
  defaultProgressOrder,
}: TaskModalProps): JSX.Element => {
  return (
    <div style={styles.container}>
      <div style={styles.modalTop}>
        <h1>{headingTitle}</h1>
        <span
          className="material-icons"
          style={styles.icon}
          onClick={(): void => {
            setIsModalOpen(false)
          }}
        >
          close
        </span>
      </div>
      <TaskForm
        type={type}
        setIsModalOpen={setIsModalOpen}
        setIsMenuOpen={setIsMenuOpen}
        task={task}
        defaultProgressOrder={defaultProgressOrder}
      />
    </div>
  )
}

const styles: CSSProperties = {
  container: {
    border: '1px solid gray',
    position: 'fixed',
    top: '20%',
    left: '40%',
    width: '25%',
    backgroundColor: '#fff',
    padding: '28px',
    zIndex: 10,
  },
  modalTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    cursor: 'pointer',
  },
}

export default TaskModal
