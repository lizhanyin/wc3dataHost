
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ErrorView = ({type, ...props}) => {
  let error = 'Unknown error.';
  Object.keys(props).some(id => {
    if (props[id] && props[id].error) {
      error = props[id].error;
      return true;
    }
    return false;
  });
  return (
    <div className="app-body">
      <Alert variant={type || "danger"}>
        <strong>Error:</strong> {error}
      </Alert>
    </div>
  );
};

ErrorView.propTypes = {
  type: PropTypes.string
};

export { ErrorView };
export default ErrorView;
