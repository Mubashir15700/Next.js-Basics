interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const jsonRes: User[] = await res.json();
  console.log(jsonRes);

  return (
    <>
      <h1>Users</h1>
      <table className="border-collapse border border-slate-500">
        <thead>
          <th className="border border-slate-600">Name</th>
          <th className="border border-slate-600">Email</th>
        </thead>
        <tbody>
          {jsonRes.map((user) => (
            <tr key={user.id}>
              <td className="border border-slate-700">{user.name}</td>
              <td className="border border-slate-700">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
