import Image from "next/image"

export default function Flags() {
  return (
    <div className="flex -space-x-2 lg:-space-x-2">
      {[
        { src: "/usa_flag.png", z: "z-[10]" },
        { src: "/spain_flag.png", z: "z-[5]" },
        { src: "/france_flag.png", z: "z-[1]" },
      ].map((flag, i) => (
        <div
          key={i}
          className={`relative size-6 lg:size-8 overflow-hidden rounded-[6px] lg:rounded-[10px] shadow-flag ${flag.z}`}
        >
          <Image src={flag.src} alt="Flag" fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
