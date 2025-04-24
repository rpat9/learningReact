import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"
import data from "./data.js"

export default function App() {

  const elements = data.map(item => {
    return (
      <Entry
        key={item.id}
        entry = {item}
      />
    )
  });

  return (
    <>

      <Header />

      <main>

        {elements}

      </main>

    </>
    
  )
}