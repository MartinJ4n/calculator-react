import { Routes, Route } from "react-router-dom";

import Calculate from "./screens/Calculate";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Calculate />} />
    </Routes>
  );
};

export default App;
