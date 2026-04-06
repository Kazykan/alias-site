import Image from "next/image"

export interface Teacher {
  name: string
  img: string
}

interface TeacherAvatarProps {
  teacher: Teacher
}

export default function TeacherAvatar({ teacher }: TeacherAvatarProps) {
  return (
    <div className="relative mb-4 w-[150px] h-[150px] lg:w-[220px] lg:h-[220px] rounded-full overflow-hidden border-4 border-white shadow-sm">
      <Image
        src={teacher.img}
        alt={teacher.name}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 150px, 220px"
      />
    </div>
  )
}
