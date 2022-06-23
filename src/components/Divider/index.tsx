import { FunctionComponent } from "react";
import divider from "./divider.png";

interface DividerProps {}

const Divider: FunctionComponent<DividerProps> = () => {
  return (
    <>
      <img className="mx-auto my-24 max-w-6xl" src={divider} alt="" />
    </>
  );
};

export default Divider;
