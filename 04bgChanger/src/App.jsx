import { useEffect, useState } from "react"


function App() {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("selectedColor" || "#ca03fc")
  })
  useEffect(() => {
    localStorage.setItem("selectedColor", color)
  }, [color])

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-warp justify-center gap-2 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "red"}}>red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "green"}}>green</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "pink"}}>pink</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "blue"}}>blue</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "cyan"}}>cyan</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "yellow"}}>yellow</button>
          <button onClick={() => setColor("lime")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "lime"}}>lime</button>
        </div>
      </div>
    </div>
  )
}

export default App
