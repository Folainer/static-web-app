import CustomBox from "./Box"

const chunk : React.FC<{chunk: number[][]}> = ({chunk}) => {
    return (
        <group>
            {chunk.map((row, i) => {
                return row.map((block, j) => {
                    const isWall = block === 2
                    if (block === 0) return null
                    return <CustomBox position={[i, isWall ? 1 : 0, j]} size={[1, isWall ? 3 : 1, 1]} color={ isWall ? 'hotpink' : 'royalblue'} />
                })
            })}
        </group>
    )
}

export default chunk