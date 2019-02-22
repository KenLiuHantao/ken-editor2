/**
 * Created by liuhantao on 2019/2/21.
 */
class NodeModel {
    public id: number;
    public fileName: string = "defeatNode";
    public tag: string;
    public type: string;

    constructor(config?: NodeModel) {
        this.id = config.id;
        this.fileName = config.fileName;
        this.tag = config.tag;
        this.type = config.type;
    }

}
export default NodeModel;
