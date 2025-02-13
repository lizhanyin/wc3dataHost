import React from "react";
import { useParams } from "react-router-dom";
import Panel from "@/components/common/panel";
import { useData } from "@/hooks";
import { parseUid } from "@/utils";

import { IdCtx } from "./FileCtx";
import { FileList } from "./FileList";
import { FileData } from "./FileData";
import { GameFileData } from "./GameFileData";

import "./FileView.scss";

class FileViewComponent extends React.Component {

  render() {
    const data = useData();
    if (!data) return <></>;
    const uid = this.props.params.id;
    const key = uid == null ? null : parseUid(uid);
    return (
      <IdCtx.Provider value={key}>
        <div className="FileView">
          <Panel cols>
            <FileList size={300} minSize={100} resizable className="LeftPanel" data={data} id={key}/>
            <Panel key={key} className="RightPanel" minSize={100}>
              {key == null ? (
                <span className="message">Select a file to view its contents</span>
              ) : (data.hasFile(key) ? (
                <FileData data={data} id={key} key={uid}/>
              ) : (data.archive ? (
                <span className="message">File not found</span>
              ) : (
                <GameFileData data={data} id={key} key={uid}/>
              )))}
            </Panel>
          </Panel>
        </div>
      </IdCtx.Provider>
    );
  }
}

// export const FileView = () => <Route path={`/:build/files/:id?`} component={FileViewComponent}/>;
export const FileView = ({...props}) => {
  const params = useParams();
  return <FileViewComponent {...props} params={params} />;
}