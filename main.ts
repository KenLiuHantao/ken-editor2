import IEditorConfig from "./components/ConfigModel";
import KenEditor2 from "./components/KenEditor2";
import NodeModel from "./components/NodeModel";

const config: IEditorConfig = {
    nodeList: [{
        fileName: "a",
        id: 1,
    }as NodeModel],
    targetId: "app",
};
window.onload=function(){
    KenEditor2.initKenEditor2(config);
};

