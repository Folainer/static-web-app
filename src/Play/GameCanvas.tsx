import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import { useState } from 'react'

// function Box(props: ThreeElements['mesh']) {
// const meshRef = useRef<THREE.Mesh>(null!)
// const [hovered, setHover] = useState(false)
// const [active, setActive] = useState(false)
// useFrame((state, delta) => (meshRef.current.rotation.x += delta, state))
//   return (
//       <mesh
//         {...props}
//         ref={meshRef}
//         scale={active ? 1.5 : 1}
//         onClick={() => setActive(!active)}
//         onPointerOver={() => setHover(true)}
//         onPointerOut={() => setHover(false)}>
//         <boxGeometry args={[1, 1, 1]} />
//         <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
//       </mesh>
//   )
// }

const GameCanvas = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [score, setScore] = useState<number>(-1)

    const endHandler = (score : number) => {
        setIsPlaying(false)
        setScore(score) 
    }

    return (
      <>
        {isPlaying ? (
          <Canvas className='canvas' camera={{ position: [4, 5, 4], rotation: [0, Math.PI, 0] }}>
            <Scene endHandler={endHandler} />
          </Canvas>
        ) : (
          score >= 0 ? (
            <div>Score: {score}</div>
          ) : (
            <div onClick={() => setIsPlaying(true)}>Start</div>
          )
        )}
      </>
    )
}

export default GameCanvas