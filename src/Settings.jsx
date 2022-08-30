import trueno_img from "./assets/img/trueno.jpg";

const Settings = () => {
  return (
    <div className="row">
      <div className="col-8">
        <section
          style={{
            backgroundImage: `url(${trueno_img})`,
            width: "100%",
            height: "320px",
          }}
        ></section>
      </div>
    </div>
  );
};

export default Settings;
