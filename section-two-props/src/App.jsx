import Header from "./components/header.jsx"
import Entry from "./components/entry.jsx"

export default function App() {
  return (
    <>

      <Header />

      <Entry 
        imgLink = "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDIwNjJ8MHwxfGFsbHx8fHx8fHx8fDE3MjMyMzUwNjR8&ixlib=rb-4.0.3&q=80&w=1080"
        country = "Japan"
        mapsLink = "https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,3514m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDQxNC4xIKXMDSoASAFQAw%3D%3D"
        placeName = "Mount Fuji"
        dates = "12 Jan, 2021 - 24 Jan, 2021"
        description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

    </>
    
  )
}