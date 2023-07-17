import { useState } from 'react'
import ImageGrid from '@/component/ImageGrid'

const App = () => {
  const [rowValue, setRowValue] = useState(2)
  const [columnValue, setColumnValue] = useState(2)
  const [previewImage, setPreviewImage] = useState<string | null>(null)

  const items = [
    { label: 'row', value: rowValue, setValue: setRowValue },
    { label: 'column', value: columnValue, setValue: setColumnValue },
  ]

  const onChangeInputImage = (files: FileList | null) => {
    const file = files ? files[0] : null

    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewImage(e.target?.result ? e.target?.result.toString() : null)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-3xl mt-8'>SlicePix</h1>
      <p className='mt-2'>Slice your picture into the number you specify.</p>
      <form className='w-full max-w-xs mt-8'>
        <div className='flex'>
          {items.map((item) => {
            return (
              <div className='[&:not(:first-child)]:ml-4'>
                <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='row'>
                  {item.label}
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500'
                  type='number'
                  id={item.label}
                  value={item.value}
                  onChange={(e) => item.setValue(Number(e.target.value))}
                  required
                />
              </div>
            )
          })}
        </div>
        <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-4 mb-2' htmlFor='image'>
          upload image
        </label>
        <input
          className='block w-full text-sm rounded-r cursor-pointer bg-gray-200'
          id='image'
          type='file'
          accept='image/*'
          onChange={(e) => onChangeInputImage(e.target.files)}
          required
        />
        {previewImage && (
          <>
            <div className='relative'>
              <img className='mt-8' src={previewImage} alt='' width='320px' />
              <ImageGrid row={rowValue} column={columnValue} />
            </div>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mt-8 mb-2' htmlFor='name'>
              output file name
            </label>
            <input className='block w-full rounded-r bg-gray-200 mb-24 py-2 px-4' id='name' type='text' required />
          </>
        )}
        <input
          className='fixed w-80 bottom-8 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300'
          type='submit'
          value='submit'
          disabled
        />
      </form>
    </main>
  )
}

export default App
