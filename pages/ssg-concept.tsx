import type { GetStaticProps } from 'next'

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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/matheus-omena/repos');

  const data = await response.json();
  const repositoryNames = data.map((item: { name: string }) => item.name);

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString()
    },
    revalidate: 5
  }
}
