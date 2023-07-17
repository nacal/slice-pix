type Props = {
  row: number
  column: number
}

const ImageGrid: React.FC<Props> = ({ row, column }) => {
  const Td = () => {
    const items = []
    for (let i = 0; i < row; i++) {
      items.push(<td className='border border-gray-300' />)
    }
    return <>{items}</>
  }

  const Tr = () => {
    const items = []
    for (let i = 0; i < column; i++) {
      items.push(
        <tr>
          <Td />
        </tr>
      )
    }
    return <>{items}</>
  }

  return (
    <div className='flex justify-center absolute w-full h-full top-0'>
      <table className='border border-gray-300 w-full h-full'>
        <tbody>
          <Tr />
        </tbody>
      </table>
    </div>
  )
}

export default ImageGrid
