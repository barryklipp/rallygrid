import { FC, PropsWithChildren } from 'react'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const Dashboard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-2 border-r bg-white">
        <LeftPanel />
      </div>
      <main className="col-span-8 overflow-y-auto">
        {children}
      </main>
      <div className="col-span-2 border-l bg-white">
        <RightPanel />
      </div>
    </div>
  )
}

export default Dashboard

