import EditForm from "../EditForm/EditForm";

export default function UserInfo({ user, setUser }) {
  return (
    <>
      <span>
        <h1>Welcome,{user.firstName ? user.firstName : "User"}</h1>
        <div className="float-right">
          {user.role.role === "guest" ? (
            <h4>Order History</h4>
          ) : (
            <>
              <h4>Permissions</h4>
              <button className="button">Add Permissions</button>
            </>
          )}
        </div>
      </span>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.LastName}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>role: {user.role.role}</p>

      <EditForm user={user} setUser={setUser} />
    </>
  );
}
