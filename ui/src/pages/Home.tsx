import { useQuery } from "@tanstack/react-query";
import { trpc } from "../utils/trpc";
import { Link } from "react-router-dom";

export function Home() {
  const { data, isLoading, isFetching } = useQuery(
    trpc.hello.queryOptions("Carlos")
  );

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>
      <Link to="/about">Go to About</Link>
    </div>
  );
}