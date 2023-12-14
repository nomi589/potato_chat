import { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../helpers/firebase";

export default function RestrictedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.displayName);
      } else {
        navigate("/");
      }
    }),
      [];
  });

  return children;
}

RestrictedRoute.propTypes = {
  children: PropTypes.element,
};
