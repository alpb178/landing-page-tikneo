export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden shadow-lg bg-linear-to-br from-white via-secondary to-primary/5
             backdrop-blur-sm">
      {children}
    </section>
  )
}

export function ContainerCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-lg
             bg-linear-to-br from-white via-secondary to-primary/5
             p-6 gap-4 flex flex-row items-center
             backdrop-blur-sm"
    >
      {children}
    </div>
  )
}
