import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import SideMenuLayout from './layouts/SideMenuLayout'
import TaskSummary from './features/tasks/components/TaskSummary'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideMenuLayout />,
    children: [
      {
        path: '/',
        element: <TaskSummary />,
      },
      {
        path: 'task-list',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Task List</h1>
          </div>
        ),
      },
      {
        path: 'task-progress',
        element: (
          <div style={{ display: 'flex' }}>
            <h1>Task Progress</h1>
          </div>
        ),
      },
    ],
  },
])

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
