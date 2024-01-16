import { useContext, useState } from "react";
import Layout from "./assets/components/Layout/Layout";
import FoodCard from "./assets/components/UI/Food-Cards/FoodCard";
import { data } from "./assets/data";
import appContext from "./assets/context/appContext";

function App() {
  const datas = Object.entries(data);
  const ctx = useContext(appContext);
  return (
    <Layout>
      {datas.map((d) => (
        <FoodCard key={d[0]} title={d[0]} data={d[1]} />
      ))}
    </Layout>
  );
}

export default App;
