/**
 * Created by liuhantao on 2019/2/21.
 */
import BaseCanvas from "./BaseCanvas";
import IEditorConfig from "./ConfigModel";
import LineListModel from "./LineListModel";
import NodeListModel from "./NodeListModel";

// 使用init方法尽量实现单例

export default class KenEditor2 {
    public static initKenEditor2(config: IEditorConfig): KenEditor2 {
        if (KenEditor2.kenEditor2Instance == null) {
            KenEditor2.kenEditor2Instance = new KenEditor2(config);
        }
        return KenEditor2.kenEditor2Instance;
    }

    private static  kenEditor2Instance: KenEditor2 = null;
    public nodeLost: NodeListModel;
    public baseCanvas: BaseCanvas;
    constructor(config: IEditorConfig) {
        this.nodeLost = new NodeListModel(config.nodeList);
        this.baseCanvas = new BaseCanvas(config.targetId);
    }
}
