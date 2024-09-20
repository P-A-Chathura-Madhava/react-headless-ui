import UserAvatar from "../../../assets/user-image.png";

function UserImage() {
  return (
    <img
      src={UserAvatar}
      alt="user-avatar"
      className="w-8 h-8 p-1 border border-black rounded-full"
    />
  );
}

export default UserImage;
