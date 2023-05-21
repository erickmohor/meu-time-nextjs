# Prévia
![Tela de Login](image_preview/my-preview_login.png)
![Tela de Informações 1](image_preview/my-preview_information1.png)
![Tela de Informações 2](image_preview/my-preview_information2.png)


# Descrição do projeto
Aplicação web que se conecta com a [API Football](https://www.api-football.com), a qual fornece informações sobre ligas e copas ao redor do mundo.


# Funcionalidades
Para acessar as informações, é necessário efetuar o login com uma chave de API, fornecida pela [API Football](https://www.api-football.com). Ao efetuar o login com sucesso, você tem acesso:


## Informações

### Topo
De acordo com as informações selecionadas no menu, no topo aparece essas informações, de forma mais organizada e clara.

### Jogadores
De acordo com o time selecionado, nessa parte aparece as fotos, nomes, idades e nacionalidades dos jogadores.

### Estatísticas do Time
De acordo com o time selecionado, nessa parte aparecem os resultados gerais dos jogos (total de jogos, vitórias, derrotas e empates). Também é possível ver a formação mais utilizada (caso só exista uma) ou as formações mais utilizadas (caso exista mais de uma formação com a mesma quantidade de uso). Por fim, é possível visualizar um gráfico com a quantidade de gols de acordo com o tempo (gráfico gols por minutos)


# Tech Stack
- Next.js 13
- TypeScript
- Tailwind CSS


# Dependências
Axios, Chart.js, Nookies, Phosphor Icons e Eslint.


# Variáveis de ambiente
`NEXT_PUBLIC_FOOTBALL_API_URL` (https://v3.football.api-sports.io)


# Para rodar localmente
Clone o diretório
```bash
  git clone https://github.com/erickmohor/meu-time-nextjs
```

Vá no diretório do projeto
```bash
  cd meu-time-nextjs
```

Instale as dependências

```bash
  npm install
```

Com as variáveis de ambiente preenchidas, inicie o servidor

```bash
  npm run dev
```

# Usar mock
Para usar os mocks, em vez de fazer chamadas a API, basta comentar a chamada a API dentro de cada arquivo com inicio get, dentro da pasta services e habilitar a importação e return do mock.