import { Game } from '@/components/Game'
import { Title } from '@/components/Title'
import { Wrapper } from '@/components/Wrapper'

export default function Home() {
  return (
    <>
      <Title />
      <Wrapper>
        <Game />
      </Wrapper>
    </>
  )
}
