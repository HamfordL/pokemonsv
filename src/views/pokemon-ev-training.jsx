import { Collapse } from "antd";
const { Panel } = Collapse;

const pokemonTraining = (key) => {
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
          {" "}
          Pokemon EV Training Targets
        </p>
        <Panel
          header="HP"
          key="1"
          style={{
            backgroundColor: "#d32f2f",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pokémon: Paldean Wooper, Azurill, Lechonk </p>
          <p> Location: South Province (Area One) </p>
          <p> Recommended Sandwich: Ham Sandwich (#80) </p>
          <p> Held Item: Power Weight </p>
        </Panel>
        <Panel
          header="Attack"
          key="2"
          style={{
            backgroundColor: "lightBlue",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pokémon: Yungoos and Shinx </p>
          <p> Location: South Province (Area Three) </p>
          <p> Recommended Sandwich: Avocado Sandwich (#44) </p>
          <p> Held Item: Power Bracer </p>
        </Panel>
        <Panel
          header="Defense"
          key="3"
          style={{
            backgroundColor: "Pink",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pokémon: Tarountula and Scatterbug </p>
          <p> Location: South Province (Area One) </p>
          <p> Recommended Sandwich: Jambon-Buerre (#1) </p>
          <p> Held Item: Power Belt </p>
        </Panel>
        <Panel
          header="Special Attack"
          key="4"
          style={{
            backgroundColor: "lightGreen",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pokémon: Psyduck </p>
          <p> Location: South Province (Area One) </p>
          <p> Recommended Sandwich: Zesty Sandwich (#56) </p>
          <p> Held Item: Power Lens </p>
        </Panel>
        <Panel
          header="Special Defense"
          key="5"
          style={{
            backgroundColor: "Yellow",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pokémon: Spoink </p>
          <p> Location: South Province (Area Three) </p>
          <p> Recommended Sandwich: Smoky Sandwich (#92) </p>
          <p> Held Item: Power Band </p>
        </Panel>
        <Panel
          header="Speed"
          key="6"
          style={{
            backgroundColor: "#d32f2f",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pokémon: Rookidee, Fletchling, Magikarp, Wingull </p>
          <p> Location: South Province Egg Sandwich (#60) (Area One) </p>
          <p> Recommended Sandwich: </p>
          <p> Held Item: Power Anklet </p>
        </Panel>
        <Panel
          header="Vitamins: Raise EVs by 10"
          key="7"
          style={{
            backgroundColor: "#9575cd",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> HP Up: HP </p>
          <p> Protein: Attack </p>
          <p> Iron: Defense </p>
          <p> Carbos: Speed </p>
          <p> Calcium: Special Attack </p>
          <p> Zinc: Special Defense </p>
        </Panel>
        <Panel
          header="Feathers: Raise EVs by 1"
          key="8"
          style={{
            backgroundColor: "#9575cd",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Health Feather: HP </p>
          <p> Muscle Feather: Attack </p>
          <p> Resist Feather: Defense </p>
          <p> Swift Feather: Speed </p>
          <p> Genius Feather: Special Attack </p>
          <p> Clever Feather: Special Defense </p>
        </Panel>
        <Panel
          header="Lowering EVs (reset) reduce by 10 - Berries"
          key="9"
          style={{
            backgroundColor: "#9575cd",
            fontWeight: "bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          <p> Pomeg: HP </p>
          <p> Kelpsy: Attack </p>
          <p> Qualot: Defense </p>
          <p> Tomato: Speed </p>
          <p> Hondew: Special Attack </p>
          <p> Grepa: Special Defense </p>
          <p>
            You can find these berries as sparkling items on the ground, but the
            best place to get them is from the Porto Marinada auction. Randomly,
            one of the NPCs will sell more than 50 of these berries at once —
            you can snag a ton in one go to help clear out your beloved
            Pokémon’s stats.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default pokemonTraining;
