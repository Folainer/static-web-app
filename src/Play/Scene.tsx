import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { FirstPersonControls } from '@react-three/drei'
import GameLogic from './GameLogic'
import Chunk from './Chunk'

const Scene : React.FC<{endHandler : (score : number) => void}> = ({endHandler}) => {
    const [game] = useState(new GameLogic())
    game.startGame()

    useFrame((state) => {
        game.updateGame(state, state.clock.getDelta())
        if (!game.isPlaying) {
            endHandler(game.score)
        }
    })

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === ' ') {
            console.log(event.key)
            game.jump()
        }
    }

    window.addEventListener('keydown', handleKeyDown)

    return (
    <>
        <ambientLight intensity={Math.PI / 2} />
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} /> */}
        {/* <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} /> */}
        <directionalLight position={[4, 100, 4]} intensity={2*Math.PI} />
        {game.getChunks().map((chunk, index) => {
            return <Chunk key={index} chunk={chunk.chunk} />
        })}
        <FirstPersonControls lookSpeed={0.04} movementSpeed={2} />
    </>
  );
};

export default Scene