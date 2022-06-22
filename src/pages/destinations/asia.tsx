import Layout from "../../components/Layout";
import Banner from "../../components/Continents/Banner";
import Bio from "../../components/Continents/Bio";
import Cities from "../../components/Continents/Cities";

const cities = [
  { city: "Tóquio", country: "Japão", image: "tokyo.svg", flag: "japan.svg" },
  { city: "Hong Kong", country: "Hong Kong (China)", image: "hong-kong.svg", flag: "hongkong.svg" },
  { city: "Dubai", country: "Emirados Árabes", image: "dubai.svg", flag: "unitedarabemirates.svg" },
  { city: "Seoul", country: "Coréia do Sul", image: "seoul.svg", flag: "southkorea.svg" },
  { city: "Bangkok", country: "Tailândia", image: "bangkok.svg", flag: "thailand.svg" },
];

function Asia() {
  return (
    <Layout>
      <Banner title="Ásia" image="/images/backgrounds/fuji.svg" mb={["24px", "80px"]} objectFit="cover" />

      <Bio
        bio="A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering"
        info={{
          countries: 50,
          languages: 100,
          cities: 34
        }}
        mb={["24px", "80px"]}
      />

      <Cities cities={cities} total={100} />
    </Layout>
  );
}

export default Asia;