import image from "../assets/image-avatar.jpg";
import AvatarStyles from "../Styles/AvatarStyles";
export default function Avatar() {
  const classes = AvatarStyles();
  return (
    <div className={classes.Avatar}>
      <img src={image} alt="Avatar"></img>
    </div>
  );
}
