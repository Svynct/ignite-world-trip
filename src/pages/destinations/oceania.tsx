import Layout from "../../components/Layout";
import Banner from "../../components/Continents/Banner";
import Bio from "../../components/Continents/Bio";
import Cities from "../../components/Continents/Cities";

const cities = [
  { city: "Sydney", country: "Austrália", image: "sydney.svg", flag: "australia.svg" },
  { city: "Melbourne", country: "Austrália", image: "melbourne.svg", flag: "australia.svg" },
  { city: "Auckland", country: "Nova Zelândia", image: "auckland.svg", flag: "newzealand.svg" },
  { city: "Ilhas Marshall", country: "Ilhas Marshall", image: "marshall-island.svg", flag: "marshallisland.svg" },
  { city: "Funafuti", country: "Tuvalu", image: "funafuti.svg", flag: "tuvalu.svg" },
];

function Oceania() {
  return (
    <Layout>
      <Banner title="Oceania" image="/images/backgrounds/kangaroo.svg" mb={["24px", "80px"]} objectFit="cover" />

      <Bio
        bio="Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia). O termo Oceania foi criado em 1831 pelo explorador francês Dumont d'Urville. O termo é usado hoje em vários idiomas para designar uma região geográfica e política que compreende o continente da Austrália e ilhas do Oceano Pacífico adjacentes"
        info={{
          countries: 16,
          languages: 18,
          cities: 20
        }}
        mb={["24px", "80px"]}
      />

      <Cities cities={cities} total={100} />
    </Layout>
  );
}

export default Oceania;