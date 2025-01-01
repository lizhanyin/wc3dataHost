import React, { useState, useEffect } from 'react';

function withAsync(requests, Component, Loading, Error, ctx) {
  return function WithAsync(props) {

    const context = React.useContext(ctx || React.createContext());
    // ready  data  gameData  meta  listFile  objects
    const ready = useState(() => {});
    const data = useState(() => {});
    const gameData = useState(() => {});
    const meta = useState(() => {});
    const listFile = useState(() => {});
    const objects = useState(() => {});

    const state = {};
    const requestNames = Object.keys(requests);
    requestNames.forEach(name => state[name] = {});

    useEffect(() => {
      requestNames.forEach(name => {
        const request = (typeof requests[name] === "function" ? requests[name](props, context) : requests[name]);
        if (state[name].request !== request) {
          if (request.then) {

            // this.setState({[name]: {request}}, () => {

            //   request.then(result => this.setStateChecked(prevState => {
            //     if (prevState[name].request === request) return {[name]: {request, result}};
            //   }), error => this.setStateChecked(prevState => {
            //     if (prevState[name].request === request) return {[name]: {request, error}};
            //   }));

            // });

          } else {

            // this.setState({[name]: {request, result: request}});

          }
        }
      });
    }, [ready, data, gameData, meta, listFile, objects, requestNames, props, context]);

    const success = {}, failure = {};
    let loaded = true, errors = false;
    requestNames.forEach(name => {
      delete props[name];

      const data = state[name];
      if ("result" in data) {
        success[name] = data.result;
      } else if ("error" in data) {
        failure[name] = data.error;
        errors = true;
      } else {
        loaded = false;
      }
    });

    if (errors) {
      return Error ? <Error {...props} {...failure} /> : null;
    } else if (loaded) {
      return <Component {...props} {...success} />;
    } else {
      return Loading ? <Loading {...props} /> : null;
    }
  };
}

export function withAsyncLoading(requests, Component, Error) {
  return withAsync(requests, Component, Component, Error);
}

export default withAsync;
