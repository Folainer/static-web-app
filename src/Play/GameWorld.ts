interface worldDataType {
    displacement: number
    chunk : number[][]
}

function createChunk(initialValue: number = BlockType.Air) : number[][] {
    return Array(8).fill(null).map(() => Array(8).fill(initialValue))
}

enum BlockType {
    Air = 0,
    Solid = 1,
    Wall = 2
}

export default class GameWorld {
    private worldData: worldDataType[]
    private generatedChunks: number = 0

    constructor() {
        this.worldData = []
        this.generatedChunks = 0
    }

    generateWorld() {
        this.generateFirstChunk()
    }

    getChunks() {
        return this.worldData
    }

    isBottomColision(x : number, y : number, z : number) {
        const xf = x | 0
        const yf = y | 0
        const zf = z | 0
        const block = this.getBlock(xf, yf)

        if (zf >= 0) {
            if (block === BlockType.Solid && zf <= 1) {
              return true;
            }
            if (block === BlockType.Wall && zf <= 3) {
              return true;
            }
          }
        return false
    }

    getBlock(x: number, y: number) {
        const chunkIndex = Math.floor(y / 8)
        const chunk = this.worldData.find((chunk) => chunk.displacement === chunkIndex)
        if (!chunk) return BlockType.Air

        if (x >= 0 && x < 8) {
            return chunk.chunk[x][y % 8]
        }

        return BlockType.Air
    }

    private generateFirstChunk() {
        const chunk = createChunk(BlockType.Wall)

        for (let i = 1; i < 7; i++) {
            for (let j = 1; j < 8; j++) {
                chunk[i][j] = BlockType.Solid
            }
        }
        this.worldData.push({
            displacement: this.generatedChunks++,
            chunk: chunk
        })
    }
}