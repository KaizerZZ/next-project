import Profile from "components/ui/profile/Profile";

const ProfileContainer = (props)=>{
    const {id, name, username, profpic, bio} = props;
    return(
        <>
        <Profile 
            id={id}
            name={name}
            username={username}
            profpic={profpic}
            bio={bio}
        />
        </>
    );
}

export default ProfileContainer;