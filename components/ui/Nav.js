import styled from "styled-components";
import {
  IoHomeOutline,
  IoSearchOutline,
  IoAddOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";

const BottomNavWrapper = styled("div")`
  height: 48px;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
  border-top: solid 2px #eaeaea;
  align-items: center;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: #fff;
`;

const ButtonNav = styled("button")`
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`;

const Nav = () => {
  const routers = useRouter();
  return (
    <BottomNavWrapper>
      <ButtonNav>
        <IoHomeOutline onClick={()=>{
          routers.push('/');
        }}/>
      </ButtonNav>
      <ButtonNav>
        <IoSearchOutline />
      </ButtonNav>
      <ButtonNav>
        <IoAddOutline />
      </ButtonNav>
      <ButtonNav>
        <IoHeartOutline />
      </ButtonNav>
      <ButtonNav>
        <IoPersonCircleOutline />
      </ButtonNav>
    </BottomNavWrapper>
  );
};

export default Nav;
