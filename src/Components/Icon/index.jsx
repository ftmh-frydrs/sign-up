import { LuUser } from "react-icons/lu";
import { RiLockPasswordFill } from "react-icons/ri";
import { PiNewspaper } from "react-icons/pi";

const iconComponents = {
  user: LuUser,
  password: RiLockPasswordFill,
  email: PiNewspaper,
};

const Icon = ({ type, size, color }) => {
  const SelectedIcon = iconComponents[type];
  return <SelectedIcon size={size} color={color} />;
};

export default Icon;
