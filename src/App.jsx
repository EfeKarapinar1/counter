import { useState } from "react"

function App() {

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  }

  const azalt = () => {
    setCount(count - 1);
  }

  return (
    <div className="container mt-5 d-flex justify-content-center flex-column align-items-center">

      <h1>{count}</h1>
      
      <div className="container d-flex justify-content-center gap-3">
        <button type="button" className="btn btn-danger" onClick={azalt}>
          Decrease
        </button>
        <button type="button" className="btn btn-success" onClick={arttir}>
          Increase
        </button>
      </div>

    </div>
  )
}

export default App
