import { Collapse } from "antd";
const { Panel } = Collapse;

const pokemonTyping = (key) => {
  console.log(key);

  return (
    <div>
      <Collapse accordion>
        <p
          style={{
            fontWeight: "bold",
            fontVariantCaps: "small-caps",
            fontSize: 24,
            margin: "0px",
            padding: 20,
            background: "darkred",
            textAlign: "center",
            color: "white",
          }}
        >
          Pokemon Typing
        </p>

        <Panel
          header="Bug"
          key="1"
          style={{
            backgroundColor: "#A6B91A",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Grass, Dark, Psychic </p>
          <p>Weakness: Fire, Flying, Rock </p>
        </Panel>
        <Panel
          header="Dark"
          key="2"
          style={{
            backgroundColor: "#705746",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Ghost, Psychic </p>
          <p>Weakness: Bug, Fairy, Fighting </p>
        </Panel>
        <Panel
          header="Dragon"
          key="3"
          style={{
            backgroundColor: "#6F35FC",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Dragon </p>
          <p>Weakness: Dragon, Fairy, Ice </p>
        </Panel>
        <Panel
          header="Electric"
          key="4"
          style={{
            backgroundColor: "#F7D02C",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Flying, Water </p>
          <p>Weakness: Ground </p>
        </Panel>
        <Panel
          header="Fairy"
          key="5"
          style={{
            backgroundColor: "#D685AD",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Fighting, Dark, Dragon </p>
          <p>Weakness: Poison, Steel </p>
        </Panel>
        <Panel
          header="Fighting"
          key="6"
          style={{
            backgroundColor: "#C22E28",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Dark, Ice, Normal, Rock, Steel </p>
          <p>Weakness: Fairy, Flying, Psychic </p>
        </Panel>
        <Panel
          header="Fire"
          key="7"
          style={{
            backgroundColor: "#EE8130",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Bug, Grass, Ice, Steel </p>
          <p>Weakness: Ground, Rock, Water </p>
        </Panel>
        <Panel
          header="Flying"
          key="8"
          style={{
            backgroundColor: "#A98FF3",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Bug, Fighting, Grass </p>
          <p>Weakness: Electric, Ice, Rock </p>
        </Panel>
        <Panel
          header="Ghost"
          key="9"
          style={{
            backgroundColor: "#735797",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Ghost, Psychic </p>
          <p>Weakness: Dark, Ghost </p>
        </Panel>
        <Panel
          header="Grass"
          key="10"
          style={{
            backgroundColor: "#7AC74C",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Ground, Rock, Water </p>
          <p>Weakness: Bug, Fire, Flying, Ice, Poison </p>
        </Panel>
        <Panel
          header="Ground"
          key="11"
          style={{
            backgroundColor: "#E2BF65",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Electric, Fire, Poison, Rock, Steel </p>
          <p>Weakness: Grass, Ice, Water </p>
        </Panel>
        <Panel
          header="Ice"
          key="12"
          style={{
            backgroundColor: "#96D9D6",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Dragon, Flying, Grass, Ground </p>
          <p>Weakness: Fighting, Fire, Rock, Steel </p>
        </Panel>
        <Panel
          header="Normal"
          key="13"
          style={{
            backgroundColor: "#A8A77A",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: -- </p>
          <p>Weakness: Fighting </p>
        </Panel>
        <Panel
          header="Poison"
          key="14"
          style={{
            backgroundColor: "#A33EA1",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Fairy, Grass</p>
          <p>Weakness: Ground, Psychic </p>
        </Panel>
        <Panel
          header="Psychic"
          key="15"
          style={{
            backgroundColor: "#F95587",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Fighting, Poison </p>
          <p>Weakness: Bug, Dark, Ghost </p>
        </Panel>
        <Panel
          header="Rock"
          key="16"
          style={{
            backgroundColor: "#B6A136",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Bug, Fire, Flying, Ice </p>
          <p>Weakness: Fighting, Grass, Ground, Steel, Water </p>
        </Panel>
        <Panel
          header="Steel"
          key="17"
          style={{
            backgroundColor: "#B7B7CE",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Fairy, Ice, Rock </p>
          <p>Weakness: Fighting, Fire, Ground </p>
        </Panel>
        <Panel
          header="Water"
          key="18"
          style={{
            backgroundColor: "#6390F0",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p>Strong Against: Fire, Ground, Rock </p>
          <p>Weakness: Electric, Grass </p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default pokemonTyping;
