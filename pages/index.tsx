import axios from "axios";
import type { NextPage } from "next";

const Home: NextPage = ({ videos }) => {
  console.log(videos);

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export const getServerSideProps = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/post`);

  return {
    props: {
      videos: data,
    },
  };
};

export default Home;
