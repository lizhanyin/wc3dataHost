import React from 'react';
import PropTypes from 'prop-types';
import { GlobalProviderContext } from "@/hooks/use-global"
import { title } from "@/hooks/use-title";

const GlobalProvider = ({ children, ...props }) => {

  let value = {
    ...title(),
  }

  return (
    <GlobalProviderContext value={value} {...props}>
      {children}
    </GlobalProviderContext>
  );
};

GlobalProvider.propTypes = {
  title: PropTypes.string.isRequired,
  combiner: PropTypes.func,
};

GlobalProvider.defaultProps = {
  combiner: (prev, current) => `${prev} - ${current}`,
};

export { GlobalProvider };