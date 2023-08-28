async function useList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}
export default async function Page() {
  let users = await useList();
  console.log("===");
  return (
    <div>
      <h1>SERVER API</h1>

      {users.map((item) => (
        <h3 key={item.id}>Name:{item.firstName}</h3>
      ))}
    </div>
  );
}
