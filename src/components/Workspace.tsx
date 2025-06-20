import { FC, useState } from 'react'
import generateContent from '../utils/generateContent'

const Workspace: FC = () => {
  const [blocks, setBlocks] = useState<string[]>(['Editable Block'])

  const addBlock = async () => {
    const content = await generateContent()
    setBlocks([...blocks, content])
  }

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
        onClick={addBlock}
      >
        + Add Block
      </button>
    </div>
  )
}

export default Workspace

