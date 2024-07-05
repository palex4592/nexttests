import { ButtonTopNavTwo } from "./buttontopnav";
import { StyledTopNav } from "../styles/globalStyles";
export default function TopNav() {
  return (
    <StyledTopNav>
      <div className="backdrop-blur-lg">
        <ButtonTopNavTwo />
      </div>
    </StyledTopNav>
  );
}
