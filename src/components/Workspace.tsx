import { FC, useState } from 'react'
import generateContent from '../utils/generateContent'
import { Button } from '@/components/ui/button'

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
      <Button onClick={addBlock}>+ Add Block</Button>
    </div>
  )
}

export default Workspace

