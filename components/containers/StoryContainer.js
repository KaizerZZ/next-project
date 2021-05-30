import styled from "styled-components";

const StoryWrapper = styled("div")`
  display: flex;
  overflow: auto;
`;

const StoryItemWrapper = styled("div")`
  width: 100px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0px;
`;

const ProfilePicture = styled("div")`
  width: 62px;
  height: 62px;
  border-radius: 100%;
`;

const stories = [
  {
    id: 1,
    username: "Shirakami Fubuki",
    profpic: "https://pbs.twimg.com/profile_images/1391543185025822720/v2pZA-4h_400x400.jpg"
  
  },
  {
    id: 2,
    username: "Nakiri Ayame",
    profpic: "https://pbs.twimg.com/profile_images/1374730291542167556/JZ32XH6n_400x400.jpg"
    
  },
  {
    id: 3,
    username: "Ookami Mio",
    profpic: "https://pbs.twimg.com/profile_images/1377457146292436993/pj_erlKH_400x400.jpg"
    
  },
  {
    id: 4,
    username: "Amelia Watson",
    profpic: "https://pbs.twimg.com/profile_images/1318958836120649728/7JHxy2UO_400x400.jpg"
    
  },
  {
    id: 5,
    username: "Gawr Gura",
    profpic: "https://pbs.twimg.com/profile_images/1309957523089354760/uRrxAmOB_400x400.jpg"
    
  },
]


const StoryContainer = () => {
  return (
    <StoryWrapper>
    {stories.map((story)=>{
      return(
      <div className="flex gap-2" key={story.id}>
        <StoryItemWrapper>
          <div className="flex justify-center">
            <ProfilePicture className="flex justify-center border-2 border-pink-700">
              <img className="rounded-full m-0.5" src={story.profpic}/>
            </ProfilePicture>
          </div>
          <div className="text-center">{story.username.substr(0,7)}...</div>
        </StoryItemWrapper>
      </div>
      )
    })}
    </StoryWrapper>
  );
};

export default StoryContainer;
