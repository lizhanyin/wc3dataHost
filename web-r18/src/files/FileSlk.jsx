import PropTypes from 'prop-types';
import React from 'react';
import { Cell } from './utils';

export default class FileSlkView extends React.PureComponent {

  static propTypes = {
    data: PropTypes.shape({
      cols: PropTypes.number.isRequired,
      rows: PropTypes.arrayOf(PropTypes.array).isRequired,
      comments: PropTypes.arrayOf(PropTypes.array)
    }).isRequired
  };

  render() {
    const { data } = this.props;
    const iotaX = [...Array(data.cols)].map((_, i) => i);
    const iotaY = [...data.rows].map((_, i) => i);
    return (
      <div className="FileSlk">
        <table>
          {data.rows.length >= 1 && <thead>
            <tr>
              {iotaX.map(i => <Cell type="th" key={i} value={data.rows[0][i] || ""} comment={data.comments && data.comments[0] && data.comments[0][i]}/>)}
            </tr>
          </thead>}
          <tbody>
            {iotaY.filter(i => i > 0).map(i => (
              <tr key={i}>
                {iotaX.map(j => <Cell type="td" key={j} value={data.rows[i] ? data.rows[i][j] : undefined}
                  comment={data.comments && data.comments[i] && data.comments[i][j]}/>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
