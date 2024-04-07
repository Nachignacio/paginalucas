import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>} children={<RouteHandler/>}>
              <Route path="*" element={<h1>404 not found</h1>}/>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

function RouteHandler() {
  const params = useParams();
  return <Layout params={params} />;
}


export default App;
