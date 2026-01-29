export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#f7f5ff] via-[#f3efff] to-white">
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-400/20 rounded-full blur-3xl animate-pulse" />

      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-400/20 rounded-full blur-3xl" />
      <div className="absolute top-20 -right-40 w-[480px] h-[480px] bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-[420px] h-[420px] bg-pink-400/10 rounded-full blur-3xl" />

      {/* Light overlay */}


      {/* Content */}
      {children}

    </section>
  )
}

