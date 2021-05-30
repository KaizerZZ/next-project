import styled from "styled-components";
import { IoArrowBackOutline, IoPersonAddOutline } from "react-icons/io5";
import { useRouter } from "next/router";

const IconButton = styled("button")`
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopNavWrapper = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  height: 48px;
  border-bottom: solid 2px #eaeaea;
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
`;

const TopNav = (props) => {
  const {username} = props;
  const routers = useRouter();
  return (
    <>
    <TopNavWrapper>
      <IconButton>
        <IoArrowBackOutline className="text-2xl" onClick={()=>{
          routers.push('/');
        }}/>
      </IconButton>
      <h3 className="font-bold text-md">@{username}</h3>
      <IconButton>
        <IoPersonAddOutline className="text-2xl" />
      </IconButton>
    </TopNavWrapper>
    </>
  );
};

export default TopNav;
