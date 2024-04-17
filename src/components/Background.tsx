import Image from 'next/image'

export function BackgroundImage() {
  return (
    <div className="fixed left-0 top-0 -z-10 min-h-screen w-full bg-black">
      <Image
        src="/images/background.jpg"
        className="-z-20 opacity-10"
        alt="Imagem de fundo"
        fill
      />
    </div>
  )
}
