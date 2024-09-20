import UserImage from "../atoms/UserImage";
import UserProfileButton from "../atoms/UserProfileButton";

function UserData() {
  return (
    <div className="flex gap-2">
      <UserProfileButton />
      <UserImage />
    </div>
  );
}

export default UserData;
