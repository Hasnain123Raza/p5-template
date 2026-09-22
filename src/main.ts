import './style.css'
import p5 from 'p5'

const sketch = (p: p5) => {
  // Eased position state (kept in a closure, not on the p5 instance)
  let x = 0
  let y = 0

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    x = window.innerWidth / 2
    y = window.innerHeight / 2
    p.pixelDensity(1)
  }

  p.draw = () => {
    p.background(16, 17, 29)

    // A pulsing circle that eases toward the cursor
    x = p.lerp(x, p.mouseX, 0.08)
    y = p.lerp(y, p.mouseY, 0.08)

    const size = 40 + 30 * Math.sin(p.frameCount * 0.05)
    p.noStroke()
    p.fill(192, 132, 252, 200)
    p.circle(x, y, size)
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
  }
}

const container = document.querySelector<HTMLDivElement>('#app')!
new p5(sketch, container)
