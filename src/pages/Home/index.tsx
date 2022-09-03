import Card from "../../components/Card"
import CardLine from "../../components/CardLine";
import SearchBar from "../../components/SearchBar"

const Home = () => {
  return (
    <>
      <br></br>
      <SearchBar />

      <br></br>

      <br></br>

      <CardLine>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardLine>
    </>
  );
}

export default Home;