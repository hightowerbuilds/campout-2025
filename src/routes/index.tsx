import { createFileRoute, Link } from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="index-container">
      <h1>Campout 2025</h1>
      <Link to="/game" className="start-game-button">
        Start Game
      </Link>
    </div>
  )
}
