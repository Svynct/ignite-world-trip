import Layout from "../../components/Layout";
import Banner from "../../components/Continents/Banner";
import Bio from "../../components/Continents/Bio";
import Cities from "../../components/Continents/Cities";

const cities = [
  { city: "Rio de Janeiro", country: "Brasil", image: "riodejaneiro.svg", flag: "brazil.svg" },
  { city: "Fernando de Noronha", country: "Brasil", image: "noronha.svg", flag: "brazil.svg" },
  { city: "Punta del Este", country: "Uruguai", image: "puntadeleste.svg", flag: "uruguay.svg" },
  { city: "Buenos Aires", country: "Argentina", image: "buenosaires.svg", flag: "argentina.svg" },
  { city: "Macchu Picchu", country: "Peru", image: "macchupicchu.svg", flag: "peru.svg" },
];

function SouthAmerica() {
  return (
    <Layout>
      <Banner title="América do Sul" image="/images/backgrounds/cristo.svg" mb={["24px", "80px"]} objectFit="cover" />

      <Bio
        bio="Formado por 12 países e pela Guiana Francesa, um território ultramarino que integra a França, a América do Sul é banhada a leste pelo oceano Atlântico, a oeste pelo oceano Pacífico e ao norte pelo mar do Caribe. Sua conexão com a América Central ocorre na fronteira entre a Colômbia e o Panamá, no noroeste do subcontinente"
        info={{
          countries: 12,
          languages: 9,
          cities: 36
        }}
        mb={["24px", "80px"]}
      />

      <Cities cities={cities} total={100} />
    </Layout>
  );
}

export default SouthAmerica;