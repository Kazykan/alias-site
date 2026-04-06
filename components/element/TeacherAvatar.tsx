import Image from "next/image"

export interface Teacher {
  name: string
  img: string
  scale: number
  position: {
    x: number
    y: number
  }
}

interface TeacherAvatarProps {
  teacher: Teacher
}

export default function TeacherAvatar({ teacher }: TeacherAvatarProps) {
  return (
    <div className="relative mb-4 w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-4 border-white shadow-sm">
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          transform: "translate(-50%, -50%)",
          transformOrigin: "center center",
        }}
      >
        <div
          style={{
            transform: `
              scale(${teacher.scale})
              translate(${teacher.position.x}%, ${teacher.position.y}%)
            `,
            transformOrigin: "center center",
            transition: "transform 0.25s ease",
          }}
        >
          <Image
            src={teacher.img}
            alt={teacher.name}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
}
