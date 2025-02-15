import React from 'react';
import { useParams } from 'react-router-dom';
import Panel from '@/components/common/panel';
import { useData, useOptions } from '@/hooks';
import { RawNames, RawNamesSwitch, BuildCtx, TypeCtx, IdCtx } from './ObjectCtx';
import { ObjectList } from './ObjectList';
import { ObjectData } from './ObjectData';

import './ObjectView.scss';

const ObjectViewComponent = ({ build, type, id }) => {

  const dataObject = useData();
  const params = useParams();
  const { rawNames, setRawNames } = useOptions();
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    const fetchData = async () => setData(await dataObject.objects());  
    dataObject && fetchData();
  }, [dataObject]);

  if (!data) return <></>;


  build = build || params.build;
  type = type || params.type;
  id = id || params.id;
  
  return (
    <RawNames.Provider value={!!rawNames}>
      <RawNamesSwitch.Provider value={setRawNames}>
        <BuildCtx.Provider value={build}>
          <TypeCtx.Provider value={type}>
            <IdCtx.Provider value={id}>
              <div className="ObjectView">
                <Panel cols>
                  <ObjectList size={300} minSize={100} resizable className="LeftPanel" data={data} type={type} id={id} key={type}/>
                  <ObjectData key={`${type}-${id}`} minSize={100} className="RightPanel" data={data}/>
                </Panel>
              </div>
            </IdCtx.Provider>
          </TypeCtx.Provider>
        </BuildCtx.Provider>
      </RawNamesSwitch.Provider>
    </RawNames.Provider>
  );
}

export const ObjectView = ObjectViewComponent;