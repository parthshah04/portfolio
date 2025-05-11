declare module "confetti-js" {
  interface ConfettiSettings {
    target: string
    max: number
    size: number
    animate?: boolean
    props?: string[]
    colors?: string[][]
    clock?: number
    rotate?: boolean
    width?: number
    height?: number
    start_from_edge?: boolean
    respawn?: boolean
  }

  interface ConfettiInstance {
    render: () => void
    clear: () => void
  }

  function create(
    canvas: string | HTMLCanvasElement,
    settings?: ConfettiSettings
  ): ConfettiInstance

  const confetti = { create }
  export default confetti
} 