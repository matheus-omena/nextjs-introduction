import type { GetServerSideProps } from 'next'

export default function Home({ repositories }: any) {
  return (
    <div>
      <h2>Lista de repositório do github</h2>
      <ul>
        {
          repositories.map((repo: string) => (
            <li key={repo}>{repo}</li>
          ))
        }
      </ul>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/matheus-omena/repos');

  const data = await response.json();
  const repositoryNames = data.map((item: { name: string }) => item.name);

  return {
    props: {
      repositories: repositoryNames
    }
  }
}
