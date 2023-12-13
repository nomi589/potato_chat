import PropTypes from "prop-types";

export default function RestrictedRoute({ children }) {
  return (
    <p>
      This is a restricted route ...
      {children}
    </p>
  );
}

RestrictedRoute.propTypes = {
  children: PropTypes.element,
};
