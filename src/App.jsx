import { Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Profile from "./Profile";
import Friends from "./Friends";

const Messages = () => {
  return <h2>Это страница с сообщениями</h2>;
};
const Settings = () => {
  return <h2>Это страница с настройками</h2>;
};

function App(props) {
  console.log(props);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            aria-orientation="vertical"
          >
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="friends">
              Друзья
            </NavLink>
          </div>
        </div>
        <div className="col-9">
          <Routes>
            <Route
              path="/profile"
              element={<Profile function={props.function.key_getUser} />}
            />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/friends"
              element={<Friends function={props.function.key_getUsers} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
