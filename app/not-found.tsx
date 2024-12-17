import Link from "next/link"

export default function NotFound() {
  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-[15vw] font-medium">404</h1>
      <p className="text-[1.1vw] font-light">page not found</p>
      <Link
        className="text-[1.5vw] mt-[1em] font-light text-moneyGreen active:text-purpleActive"
        href={"/WebApp"}
      >
        back to app
      </Link>
    </main>
  )
}
