import Header from "./components/Header"
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="bg-[#2C2F35] rounded-[50px] h-[926px] w-[428px] m-auto my-5 p-5">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App