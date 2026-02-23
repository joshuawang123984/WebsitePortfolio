import TitleBar from "./components/TitleBar";
import Terminal from "./components/Terminal";

function App() {

  return (
    <>
      <div
        className="min-h-screen flex items-start justify-center py-12 px-4"
        style={{
          fontFamily: "'Courier New', Courier, monospace",
          backgroundColor: "#0a0a0a",
          backgroundImage: "linear-gradient(rgba(0,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      >
        <div className="w-full max-w-xl border border-green-900 rounded-lg overflow-hidden shadow-xl">
          <TitleBar />
          <Terminal />
        </div>
      </div>
    </>
  )
}

export default App
