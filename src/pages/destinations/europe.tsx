import Layout from "../../components/Layout";
import Banner from "../../components/Continents/Banner";
import Bio from "../../components/Continents/Bio";
import Cities from "../../components/Continents/Cities";

const cities = [
  { city: "Londres", country: "Reino Unido", image: "london.svg", flag: "uk.svg" },
  { city: "Paris", country: "França", image: "paris.svg", flag: "france.svg" },
  { city: "Roma", country: "Itália", image: "rome.svg", flag: "italy.svg" },
  { city: "Praga", country: "República Tcheca", image: "prague.svg", flag: "czechia.svg" },
  { city: "Amsterdã", country: "Holanda", image: "amsterdam.svg", flag: "netherlands.svg" },
];

function Europe() {
  return (
    <Layout>
      <Banner title="Europa" image="/images/backgrounds/london.svg" mb={["24px", "80px"]} />

      <Bio
        bio="A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste"
        info={{
          countries: 50,
          languages: 60,
          cities: 27
        }}
        mb={["24px", "80px"]}
      />

      <Cities cities={cities} total={100} />
    </Layout>
  );
}

export default Europe;