import PropTypes from "prop-types";

import RoundImageWithText from "./RoundImageWithText";

export default function ChatCard({ username, userImg, latestMsg, selected }) {
  return (
    <section
      className={
        "my-1 px-3 py-1 hover:bg-indigo-200 hover:cursor-pointer" +
        (selected ? " bg-indigo-200" : "")
      }
    >
      <RoundImageWithText
        imgUrl={userImg}
        text={username}
        subText={latestMsg}
      />
    </section>
  );
}

ChatCard.propTypes = {
  username: PropTypes.string.isRequired,
  userImg: PropTypes.string.isRequired,
  latestMsg: PropTypes.string,
  selected: PropTypes.bool,
};
