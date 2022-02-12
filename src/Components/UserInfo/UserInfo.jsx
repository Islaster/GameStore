import EditForm from "../EditForm/EditForm";

export default function UserInfo({ user, setUser }) {
  return (
    <>
      <h1>Welcome,{user.firstName ? user.firstName : "User"}</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.LastName}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>role: {user.role.role}</p>
      <div>
        {user.role.role === "guest" ? (
          <h4>Order History</h4>
        ) : (
          <h4>Permissions</h4>
        )}
      </div>
      <EditForm user={user} setUser={setUser} />
    </>
  );
}
