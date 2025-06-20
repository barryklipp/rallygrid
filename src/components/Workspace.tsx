import { FC, useState } from 'react'

const Workspace: FC = () => {
  const [blocks, setBlocks] = useState<string[]>(['Editable Block'])

  return (
    <div className="p-4 space-y-3">
      {blocks.map((block, idx) => (
        <textarea
          key={idx}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring"
          value={block}
          onChange={e => {
            const next = [...blocks]
            next[idx] = e.target.value
            setBlocks(next)
          }}
        />
      ))}
      <button
        className="px-3 py-1 text-sm border rounded-md"
        onClick={() => setBlocks([...blocks, ''])}
      >
        + Add Block
      </button>
    </div>
  )
}

export default Workspace

