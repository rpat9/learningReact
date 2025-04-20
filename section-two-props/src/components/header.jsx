import globeImg from "../assets/globe.png"

export default function Header() {
    return (

        <header className="bg-[#F55A5A] flex justify-center items-center text-white h-[55px]">

            <img className="w-[24px] mr-[7px]" src={globeImg} alt="Globe Icon" />

            <h1 className="text-[1.2rem] font-bold font-mono">My Travel Journal</h1>

        </header>

    )
}
