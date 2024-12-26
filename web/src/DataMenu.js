import React from 'react';
import { Route } from 'react-router-dom';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import AppCache from './data/cache';
import objectTypes from './objects/types';
import './DataMenu.scss'

const ObjectMenuInner = ({ match: { params: { build, type } } }) => (
  <NavDropdown eventKey="objects" title={objectTypes[type] || "Objects"} active={objectTypes[type] != null} id="objects-menu">
    {Object.keys(objectTypes).map(t => (
      <LinkContainer key={t} to={`/${build}/${t}`}>
        <MenuItem eventKey={`objects.${t}`}>
          <span className={`ObjectIcon ${t}`} />{objectTypes[t]}
        </MenuItem>
      </LinkContainer>
    ))}
  </NavDropdown>
);

const ObjectMenu = () => <Route path="/:build/:type?" component={ObjectMenuInner} />;

const DataMenu = () => (
  <AppCache.DataContext.Consumer>
    {data => (
      <Nav>
        <LinkContainer to={`/${data.id}`} exact>
          <NavItem eventKey="build">{data.name}</NavItem>
        </LinkContainer>
        <LinkContainer to={`/${data.id}/files`}>
          <NavItem eventKey="files">Files</NavItem>
        </LinkContainer>
        {(!data.isMap || data.hasFile("objects.json")) && <ObjectMenu />}
        {(!!data.isMap) && (
          <LinkContainer to={`/${data.id}/map`}>
            <NavItem eventKey="map">Map</NavItem>
          </LinkContainer>
        )}
        {(data.hasFile("war3map.j") || data.hasFile("Scripts\\war3map.j")) && (
          <LinkContainer to={`/${data.id}/script`}>
            <NavItem eventKey="script">Script</NavItem>
          </LinkContainer>
        )}
      </Nav>
    )}
  </AppCache.DataContext.Consumer>
);
const DataMenu2 = () => (
  <AppCache.DataContext.Consumer>
    {data => (
      <React.Fragment>

        <ul className='DataMenu'>
          <LinkContainer className='title' to={`/${data.id}`} exact>
            <NavItem eventKey="build">{data.name}</NavItem>
          </LinkContainer>

          <LinkContainer to={`/${data.id}/files`}>
            <NavItem eventKey="files">Files</NavItem>
          </LinkContainer>

          {(!data.isMap || data.hasFile("objects.json")) &&
            <React.Fragment>
              <li className='sep'> | </li>
              <ObjectMenu />
            </React.Fragment>
          }
          {(!!data.isMap) && (
            <React.Fragment>
              <li className='sep'> | </li>
              <LinkContainer to={`/${data.id}/map`}>
                <NavItem eventKey="map">Map</NavItem>
              </LinkContainer>
            </React.Fragment>
          )}
          {(data.hasFile("war3map.j") || data.hasFile("Scripts\\war3map.j")) && (
            <React.Fragment>
              <li className='sep'> | </li>
              <LinkContainer to={`/${data.id}/script`}>
                <NavItem eventKey="script">Script</NavItem>
              </LinkContainer>
            </React.Fragment>
          )}
        </ul>
      </React.Fragment>
    )}
  </AppCache.DataContext.Consumer>
);

export default DataMenu2;
