export function Wrapper({ children }) {
  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4">
      {children}
    </div>
  )
}
