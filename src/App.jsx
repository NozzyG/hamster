import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [isModalBox, setModalBox] = useState(false)

  return (
    <>
      <div className="bg-[#2C2F35] rounded-[50px] h-[926px] w-[428px] m-auto my-5 p-5 relative">
        <Header setModalBox={setModalBox} isModalBox={isModalBox} />
        <Main
          isModalOpen={isModalOpen}
          setModalOpen={setModalOpen}
        />
        <Footer setModalOpen={setModalOpen} />
      </div>
    </>
  )
}

export default App