import { Link } from "react-router-dom"
function Home() {
  return (
    <div>

      <h1>Welcome Player</h1>

      <div className= "main_page-button">
        <button>
          <Link to={'/play'}>Play Now</Link>
        </button>
        <Link to={'/howto'}>How to play</Link>
      </div>
    </div>
  )
}

export default Home