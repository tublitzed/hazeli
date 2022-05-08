import Link from 'next/link';
export default function Index() {
  return (
    <>
      <h2>Hazel&apos;s Page</h2>
      <ul className="hazel-home">
        <li>
          <Link href="/h/animal">Animal Book</Link>
        </li>
        <li>
          <Link href="/h/animal">Hazel&apos;s Animal Sticker Book</Link>
        </li>
      </ul>
    </>
  );
}
