import { UserDto } from "@/api/dto/user.dto";
import { UserInfo } from "@/app/components/ui/user/UserInfo";
import { NextPage } from "next";

interface Props {
  user: UserDto;
}

const Profile: NextPage<Props> = ({ user }) => {
  return <UserInfo />;
};

export default Profile;
