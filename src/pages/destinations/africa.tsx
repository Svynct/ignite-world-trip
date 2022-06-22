import Layout from "../../components/Layout";
import Banner from "../../components/Continents/Banner";
import Bio from "../../components/Continents/Bio";
import Cities from "../../components/Continents/Cities";

const cities = [
  { city: "Kigali", country: "Ruanda", image: "kigali.svg", flag: "rwanda.svg" },
  { city: "Hurghada", country: "Egito", image: "hurghada.svg", flag: "egypt.svg" },
  { city: "Cairo", country: "Egito", image: "cairo.svg", flag: "egypt.svg" },
  { city: "Okene", country: "Nigéria", image: "okene.svg", flag: "nigeria.svg" },
  { city: "Joanesburgo", country: "África do Sul", image: "johannesburg.svg", flag: "southafrica.svg" },
];

function Africa() {
  return (
    <Layout>
      <Banner title="África" image="/images/backgrounds/pyramids.svg" mb={["24px", "80px"]} />

      <Bio
        bio="A África está separada da Europa pelo mar Mediterrâneo e liga-se à Ásia na sua extremidade nordeste pelo istmo de Suez. O continente é o único que se estende pelo hemisfério norte e hemisfério sul, atravessado pela linha do equador e o meridiano de Greenwich. No entanto, a África ocupa uma única placa tectônica, ao contrário da Europa que partilha com a Ásia a placa Euro-asiática"
        info={{
          countries: 54,
          languages: 2000,
          cities: 50
        }}
        mb={["24px", "80px"]}
      />

      <Cities cities={cities} total={100} />
    </Layout>
  );
}

export default Africa;