import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import { OptionsProviderContext } from "@/hooks/use-options"

const OptionsProvider = ({ children, ...props }) => {
  
  const [state, setState] = useState(() => {
    let initialState = {};
    if (window.localStorage) {
      const value = window.localStorage.getItem("options");
      if (value) {
        try {
          initialState = JSON.parse(value);
        } catch (e) {
          // handle error
        }
      }
    }
    return initialState;
  });

  const update = (name, value) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (window.localStorage) {
      const opt = { ...state };
      delete opt.update;
      window.localStorage.setItem("options", JSON.stringify(opt));
    }
  }, [state]);

  return (
    <OptionsProviderContext {...props} value={{ ...state, update }}>
      {children}
    </OptionsProviderContext>
  );
};

export { OptionsProvider, OptionsProviderContext };
OptionsProvider.propTypes = {
  children: PropTypes.node.isRequired
};