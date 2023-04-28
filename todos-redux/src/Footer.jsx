import { useSelector } from "react-redux";

export default function Footer() {
  const count = useSelector((state) => state.length);

  let choreWord = count == 1 ? "chore" : "chores";

  const footerStyles = {
    marginTop: 30,
    backgroundColor: "lightgray",
  };

  return (
    <div style={footerStyles}>
      You have {count == 0 ? "no" : count} {choreWord}
    </div>
  );
}
