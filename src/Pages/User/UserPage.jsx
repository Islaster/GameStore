import UserInfo from "../../Components/UserInfo/UserInfo";

export default function UserPage({ user, setUser }) {
  return (
    <>
      <UserInfo user={user} setUser={setUser} />
    </>
  );
}
