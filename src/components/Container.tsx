export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden  shadow-lg  bg-linear-to-br from-white via-purple-50 to-purple-100
           
             backdrop-blur-sm">

      {/* Content */}
      {children}

    </section >
  )
}

export function ContainerCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg
             bg-linear-to-br from-white via-purple-50 to-purple-100
             p-6 gap-4 flex flex-row items-center
             backdrop-blur-sm"
    >
      {children}
    </div>
  )
}



