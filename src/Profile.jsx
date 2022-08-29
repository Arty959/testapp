import styles from "./Profile.module.css";
const Profile = (props) => {
  let user = props.function();
  console.log(user);
  return (
    <div className="row">
      <div className="col-sm-4">
        <img className="img-fluid" src={user.avatar} alt="" />
      </div>
      <div className="col-sm-8">
        <h1 className={styles.about}>{user.lastname}</h1>
        <h2 style={{ backgroundColor: "lightblue" }}>{user.about}</h2>
        <h3>{user.email}</h3>
        <p className={styles.id}>Id: {user.id}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia id
          quia quam consectetur sit, ratione est, repellat asperiores aut
          suscipit ducimus ex hic sequi qui vero praesentium dolorum error!
          Asperiores.
        </p>
      </div>
    </div>
  );
};

export default Profile;
