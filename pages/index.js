import { Layout } from '../components';

export default function Index() {
  return (
    <main>
      <a href="/h">Hazel</a>
      <a href="/e">Eli</a>
    </main>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout><section className="something-special">{page}</section></Layout>;
};
