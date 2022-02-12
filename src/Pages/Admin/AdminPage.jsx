import UserInfo from "../../Components/UserInfo/UserInfo";

export default function AdminPage({ user, setUser }) {
  return (
    <>
      <UserInfo user={user} setUser={setUser} />
    </>
  );
}
