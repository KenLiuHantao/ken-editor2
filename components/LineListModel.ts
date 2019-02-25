/**
 * Created by liuhantao on 2019/2/21.
 */
import LineModel from './LineModel';
//selectLine是新增的画线  activeLine是选中的画线
class LineListModel {
    private LineList:LineModel[];
    public selectLine:LineModel;
    public activeLine:LineModel;
    constructor() {
        this.LineList = [];
        this.selectLine = null;
        this.activeLine = null;
    }

    getCanvasLineList() {
        return this.LineList;
    }

    addCanvasLine(line?:LineModel) {
        this.LineList.push(line);
    }
}
export default LineListModel