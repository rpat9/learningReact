import markerImg from "../assets/marker.png"

export default function Entry(props) {
    return (
        <article className="flex mt-5 mx-auto max-w-[800px] w-full px-4">

            <div className="w-[200px] h-[275px] overflow-hidden rounded-[10px] shrink-0 mr-[20px] ml-[20px]">

                <img src={props.img.src}  alt={props.img.alt} className="w-full h-full object-cover" />

            </div>

            <div className="mt-5">
                <span className="flex items-center mb-2">

                    <img src={markerImg} alt="Map Marker Icon" className="w-[20px] mr-[5px]"/>

                    <span className="uppercase text-xl mr-[12px]">{props.country}</span>

                    <a href={props.mapsLink} target="_blank" className="inline-block text-[#F59E0B] underline visited:text-[#d97706] hover:scale-107 transition duration-300 ease-in-out">View on Google Maps</a>

                </span>

                <h2 className="text-3xl font-bold mt-[10px] mb-[15px]">{props.placeName}</h2>

                <p className="font-bold">{props.dates}</p>

                <p className="leading-[1.5] text-xl">{props.description}</p>

            </div>

        </article>
    )
}