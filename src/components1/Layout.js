import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/*Link와 연결되어 있는 path는 App에서 연결되어 있는 router path와 동일해야 한다. */}
            <Link to="/">Home</Link>
            {/*<a href="/">와 비슷하다. */}
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            {/*<a> 요소는 전체를 모두 렌더링하므로 <Link> 또는 <NavLink>을 사용한다.
            <Link>는 스타일을 적용할 수 없지만,
            <NavLink는 스타일을 적용할 수 있다.*/}
            {/* <a href="/dashboard">Dashboard</a> */}
            <Link to="/dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="nothing-here">Nothing here</Link>
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
