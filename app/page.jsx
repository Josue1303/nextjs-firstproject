async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

import Users from "@/components/users";
async function HomePage() {
  const users = await fetchUsers();
  return <Users users={users}></Users>;
}

export default HomePage;
