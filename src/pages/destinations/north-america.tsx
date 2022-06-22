import Layout from "../../components/Layout";
import Banner from "../../components/Continents/Banner";
import Bio from "../../components/Continents/Bio";
import Cities from "../../components/Continents/Cities";

const cities = [
  { city: "Nova Iorque", country: "Estados Unidos", image: "newyork.svg", flag: "usa.svg" },
  { city: "Miami", country: "Estados Unidos", image: "miami.svg", flag: "usa.svg" },
  { city: "Los Angeles", country: "Estados Unidos", image: "losangeles.svg", flag: "usa.svg" },
  { city: "Toronto", country: "Canadá", image: "toronto.svg", flag: "canada.svg" },
  { city: "Cancún", country: "México", image: "cancun.svg", flag: "mexico.svg" },
];

function NorthAmerica() {
  return (
    <Layout>
      <Banner title="América do Norte" image="/images/backgrounds/rushmore.svg" mb={["24px", "80px"]} objectFit="cover" />

      <Bio
        bio="A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica). Os dois primeiros países são os únicos do continente americano que estão inseridos no grupo dos países mais importantes político e economicamente, especialmente os Estados Unidos, que possuem a condição de maior potência mundial"
        info={{
          countries: 3,
          languages: 6,
          cities: 28
        }}
        mb={["24px", "80px"]}
      />

      <Cities cities={cities} total={100} />
    </Layout>
  );
}

export default NorthAmerica;