import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"
import data from "./data.js"

export default function App() {

  const elements = data.map(item => {
    return (
      <Entry
        img= {item.img}
        country = {item.country}
        mapsLink = {item.googleMapsLink}
        placeName = {item.title}
        dates = {item.dates}
        description = {item.text}
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