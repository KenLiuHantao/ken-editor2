/**
 * Created by liuhantao on 2019/2/21.
 */
import nodeModel from "./NodeModel";
class NodeListModel {
    public list: nodeModel[] = [];

    constructor(config: nodeModel[] = []) {
        for (const node of config) {
            this.list.push(new nodeModel(node));
        }
    }
}
export default NodeListModel;
