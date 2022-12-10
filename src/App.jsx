import React from "react";
import { Layout } from "antd";

import PokeTyping from "./views/pokemon-typing";
import PokeEvTrain from "./views/pokemon-ev-training";

import PokemonSV from "./images/pokemonbackground.png";

const { Header, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          position: "relative",
          margin: "0px",
          overFlowY: "hidden",
          overFlowX: "hidden",
        }}
      >
        <Header
          style={{
            padding: 80,
            backgroundImage: `url(${PokemonSV})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        ></Header>

        <Content>
          <PokeTyping></PokeTyping>
          <PokeEvTrain></PokeEvTrain>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
