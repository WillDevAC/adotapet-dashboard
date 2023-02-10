import * as S from './styles';

export const Login = () => {
  return (
    <>
      <S.Container>
        <S.Box>
          <h1>Login</h1>
          <S.Form>
            <S.Divi>
              <label htmlFor="email">Email:</label>
              <input placeholder="Digite o seu email" type="email" id="email" />
            </S.Divi>
            <div>
              <label htmlFor="password">Senha:</label>
              <input
                placeholder="Digite a sua senha"
                type="password"
                id="password"
              />
            </div>
            <button type="submit">Entrar</button>
          </S.Form>
        </S.Box>
      </S.Container>
    </>
  );
};

// Path: src\templates\Home\styles.ts
