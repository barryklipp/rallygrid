import { FC } from 'react'

const LeftPanel: FC = () => {
  return (
    <aside className="p-4 space-y-4">
      <nav>
        <ul className="space-y-2">
          <li className="font-semibold">Home</li>
          <li>Projects</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div>
        <h2 className="font-bold mb-2">Style Bible</h2>
        <div className="space-y-2 text-sm text-gray-600">
          <p>Typography</p>
          <p>Colors</p>
          <p>Components</p>
        </div>
      </div>
    </aside>
  )
}

export default LeftPanel

