import styled from "styled-components";
// import {StoryWrapper, StoryItemWrapper, ProfilePicture} from "components/containers/StoryContainer"

const HeadProfileWrapper = styled("section")`
    display: flex;
    alignt-items: center;
    margin: 10px 0;
    height: 96px;
`;

const InfoWrapper = styled("section")`
    display: flex;
    flex: 1;
    justify-content: center;
    alignt-items: center;
`;

const DescProfileWrapper = styled("section")`
    margin: 0 0 16px 0;
    min-height: 64px;
`;

const BigProfPic = styled("img")`
    width: 96px;
    height: 96px;
    margin-right: 10px;
`;

const FollowWrapper = styled("div")`
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: thin;
`;

const ItemWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 30px;
`;

const ButtonProf = styled("button")`
    border: 1px solid #333;
    border-radius: 2px;
    padding: 2px 12px;
    margin: 0 3px;
`;  

const Profile = (props)=>{
    const {username, name, profpic, bio} = props;
    return(
        <>
        <section className="flex flex-col pl-3 pr-3 pt-12 pb-12 w-screen">
            <HeadProfileWrapper>
                <BigProfPic src={profpic} className="border-2 border-pink-600 rounded-full"/>
                <InfoWrapper>
                    <ItemWrapper>
                        <p className="text-2xl font-semibold items-end">200K</p>
                        <p>Follower</p>
                    </ItemWrapper>
                    <ItemWrapper>
                        <p className="text-2xl font-semibold items-end">200K</p>
                        <p>Following</p>
                    </ItemWrapper>
                    <ItemWrapper>
                        <p className="text-2xl font-semibold items-end">200K</p>
                        <p>Likes</p>
                    </ItemWrapper>
                </InfoWrapper>
            </HeadProfileWrapper>
            <DescProfileWrapper>
                <p className="text-md font-semibold">{name}</p>
                <p className="text-sm">{bio}</p>
            </DescProfileWrapper>
            <FollowWrapper>
                <ButtonProf className="flex-1">Following</ButtonProf>
                <ButtonProf className="flex-1">Send Message</ButtonProf>
                <ButtonProf>v</ButtonProf>
            </FollowWrapper>
        </section> 
        </>
    );
}

export default Profile;