import NotificationButton from "./components/NotificationButton"
import Header from "./components/header"
import Salescard from "./components/salescard"


function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <Salescard />
          </div>
        </section>
      </main>
    </>)
}

export default App
