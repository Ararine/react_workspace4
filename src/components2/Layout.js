import { Link, NavLink, Outlet } from "react-router-dom";
// <Link>는 스타일을 적용할 수 없지만,
// <NavLink는 스타일을 적용할 수 있다.
//스타일 지정해주는 방법
const activeStyle = ({ isActive }) => ({
  color: isActive ? "green" : "",
  fontSize: isActive ? "2rem" : "",
});

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/*Link와 연결되어 있는 path는 App에서 연결되어 있는 router path와 동일해야 한다. */}
            <NavLink to="/" style={activeStyle}>
              Home
            </NavLink>
            {/*<a href="/">와 비슷하다. */}
          </li>

          <li>
            {/*<a> 요소는 전체를 모두 렌더링하므로 <Link> 또는 <NavLink>을 사용한다.*/}
            {/* <a href="/dashboard">Dashboard</a> */}
            {/* 선택한 컴포넌트에 스타일 지정이 가능하다. */}
            <NavLink to="/dashboard" style={activeStyle}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="nothing-here" style={activeStyle}>
              Nothing here
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      {/*Outlet : route의 내용을 출력하게 만들어주는 공간. 이 부분만 비동기화로 변화는 것으로 보임*/}
      <Outlet />
    </div>
  );
};

export default Layout;
