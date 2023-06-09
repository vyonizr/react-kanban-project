import React, { Suspense, lazy, useState } from 'react'
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '../../../../constants/app'
import type { Task, CSSProperties } from '../../../../types'

const TaskCard = lazy(() => import('./TaskCard'))
const TaskModal = lazy(() => import('../shared/TaskModal'))
interface TaskColumnProps {
  columnTitle: string
  tasks: Task[]
}

const getProgressOrder = (columnTitle: string): number => {
  switch (columnTitle) {
    case TASK_PROGRESS_STATUS.NOT_STARTED:
      return TASK_PROGRESS_ID.NOT_STARTED
    case TASK_PROGRESS_STATUS.IN_PROGRESS:
      return TASK_PROGRESS_ID.IN_PROGRESS
    case TASK_PROGRESS_STATUS.WAITING:
      return TASK_PROGRESS_ID.WAITING
    case TASK_PROGRESS_STATUS.COMPLETED:
      return TASK_PROGRESS_ID.COMPLETED
    default:
      return TASK_PROGRESS_ID.NOT_STARTED
  }
}

const TaskColumn = ({ columnTitle, tasks }: TaskColumnProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div style={styles.categoryColumn}>
      <div style={styles.columnTitleWrapper}>
        <h2 style={styles.categoryTitle}>{columnTitle}</h2>
        <div
          className="material-icons"
          style={styles.plusIcon}
          onClick={(): void => {
            setIsModalOpen(true)
          }}
        >
          add
        </div>
      </div>
      <div>
        {tasks.map((task: Task) => {
          return (
            <Suspense fallback={<div>Loading</div>} key={task.id}>
              <TaskCard task={task} />
            </Suspense>
          )
        })}
      </div>
      {isModalOpen && (
        <Suspense fallback={<div>Loading</div>}>
          <TaskModal
            headingTitle="Add your task"
            type={TASK_MODAL_TYPE.ADD}
            setIsModalOpen={setIsModalOpen}
            defaultProgressOrder={getProgressOrder(columnTitle)}
          />
        </Suspense>
      )}
    </div>
  )
}

const styles: CSSProperties = {
  plusIcon: {
    cursor: 'pointer',
  },
  categoryColumn: {
    width: '22%',
  },
  columnTitleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 4px',
  },
}

export default TaskColumn
