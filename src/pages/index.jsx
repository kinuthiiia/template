import { useQuery } from "urql";

import getTodos from "../graphql/queries/getTodos.gql";

export default function Home() {
  const [{ data, fetching, error }] = useQuery({
    query: getTodos,
  });

  if (fetching) return <p>Fetching ...</p>;

  if (error) return <p>Error...</p>;

  return (
    <div>
      hey there
      {data?.getTodos.map((todo) => (
        <p>{todo.name}</p>
      ))}
    </div>
  );
}
