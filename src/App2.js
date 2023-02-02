//v6
//npm install react-router-dom

import { Route, Routes } from "react-router-dom";
import About from "./components2/About";
import Dashboard from "./components2/Dashboard";
import Home from "./components2/Home";
import Layout from "./components2/Layout";
import NoMatch from "./components2/NoMatch";

const App = () => {
  return (
    <div>
      <h1> Basic Example </h1>
      {/* */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} /> */}

        <Route path="/" element={<Layout />}>
          {/*Layout의 경로 / 와 Home의 경로가 같을 경우 index로 경로를 적어준다. 곧 인덱스 페이지로 이용됨.
          또한, Layout에서 잡아놓은 경로는 고정값으로 지정이 되어 안에 있는 route의 경로에서 제외한다.*/}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
