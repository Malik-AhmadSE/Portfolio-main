import Wrapper from "../hoc/Wrapper";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {technologies.map((tech, index) => (
        <div className="w-28 h-28" key={index} title={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default Wrapper(Tech, "tech");
