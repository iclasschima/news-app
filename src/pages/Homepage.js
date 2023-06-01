import Banner from "../components/homepage/Banner";
import Headline from "../components/homepage/Headline";
import Latestposts from "../components/homepage/Latestposts";
import Sources from "../components/homepage/Sources";
import MustRead from "../components/homepage/MustRead";
import NewLetter from "../components/homepage/Newsletter";

export default function Homepage() {
  return (
    <>
      <Banner />
      <Headline />
      <Latestposts />
      <Sources />
      <MustRead />
      <NewLetter />
    </>
  );
}
