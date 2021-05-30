import TopNav from "components/ui/homepage/TopNav";
import StoryContainer from "components/containers/StoryContainer";
import PostContainer from "components/containers/PostContainer";
import Nav from "components/ui/Nav";

const Home = () => {
  return (
    <>
      <TopNav />
      <div style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <StoryContainer />
        <PostContainer />
      </div>
      <Nav />
    </>
  );
};

export default Home;
