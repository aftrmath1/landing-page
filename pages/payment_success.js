import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  return <main className="bg-primary">Payment Success! {query}</main>;
}
