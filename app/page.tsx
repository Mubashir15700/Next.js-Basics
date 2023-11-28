import Link from "next/link";
import ProductCard from "./components/productCard/ProductCard";

export default function Home() {
  return (
    <main className="">
      <h1>Hello World</h1>
      <ProductCard />
      <Link href={"/users"}>
        <p className="text-decoration-line: underline text-sky-600">Users</p>
      </Link>
    </main>
  );
}
