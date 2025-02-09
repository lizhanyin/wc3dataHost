import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { RawNames, RawNamesSwitch, BuildCtx, TypeCtx, IdCtx } from './ObjectCtx';

import Panel from '@/components/common/panel';
// import { withAsync } from '../utils';
// import AppCache from '../data/cache';
import { useAppCache } from '@/hooks/use-cache';
import { useOptions } from '@/hooks/use-options';

import { ObjectList } from './ObjectList';
import { ObjectData } from './ObjectData';

import './ObjectView.scss';

const ObjectViewComponent = ({ build, type, id }) => {

  const { baseData } = useAppCache();
  const { rawNames, setRawNames } = useOptions();

  return (
    <RawNames.Provider value={!!rawNames}>
      <RawNamesSwitch.Provider value={setRawNames}>
        <BuildCtx.Provider value={build}>
          <TypeCtx.Provider value={type}>
            <IdCtx.Provider value={id}>
              <div className="ObjectView">
                <Panel cols>
                  <ObjectList size={300} minSize={100} resizable className="LeftPanel" data={baseData} type={type} id={id} key={type}/>
                  <ObjectData minSize={100} className="RightPanel" data={baseData}/>
                </Panel>
              </div>
            </IdCtx.Provider>
          </TypeCtx.Provider>
        </BuildCtx.Provider>
      </RawNamesSwitch.Provider>
    </RawNames.Provider>
  );
}

export const ObjectView = () => <Routes><Route path={`/:build/:type/:id?`} element={<ObjectViewInner/>}/></Routes>;
