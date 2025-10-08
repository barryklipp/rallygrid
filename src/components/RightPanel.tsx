import { FC } from 'react'

const RightPanel: FC = () => {
  return (
    <aside className="p-4 space-y-4">
      <div>
        <h2 className="font-bold mb-2">Saved Insights</h2>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>No insights yet</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-2">Tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs bg-gray-200 rounded">example</span>
        </div>
      </div>
    </aside>
  )
}

export default RightPanel

