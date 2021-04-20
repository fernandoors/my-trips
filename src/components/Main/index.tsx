import * as S from './styles'
const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="Imagem de um átomo - Logo do ReactJS" />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      ReactJS, TypeScript, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenho de pessoa em frente à telas de código"
    />
  </S.Wrapper>
)
export default Main
