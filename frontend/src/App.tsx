import { FC } from "react";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";

const App: FC = () => (
  <Header>
    <HomePage />
  </Header>
);
export default App;
