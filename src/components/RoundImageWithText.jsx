import PropTypes from "prop-types";

export default function RoundImageWithText({ imgUrl, text, subText }) {
  return (
    <div className="flex items-center gap-1">
      <img src={imgUrl} width={50} height={50} className="rounded-full" />
      <div>
        <p>{text}</p>
        <p className="text-sm text-slate-500">{subText}</p>
      </div>
    </div>
  );
}

RoundImageWithText.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

RoundImageWithText.defaultProps = {
  imgUrl: "https://placeholder.co/100",
  text: "Username",
  subText: "",
};
