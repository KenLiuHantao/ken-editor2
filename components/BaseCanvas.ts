/**
 * Created by liuhantao on 2019/2/22.
 */
class BaseCanvas {
    public ctx: any;
    public canvas: any;
    private build: boolean = false;
    constructor(id: string) {
        // 在传入id的dom下新建一个核心canvas
        // baseModel有且仅有一个 所以新建前检查一下
        if (document.querySelector("#baseCanvas")) {
            console.warn("Can't build second baseModel");
            return;
        }
        if (document.querySelector("#" + id) === null) {
            console.error("Can't find DOM with #" + id + "!");
            return;
        }
        const canvas = document.createElement("canvas");
        canvas.setAttribute("id", "baseCanvas");
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        const element: HTMLElement = document.querySelector("#" + id) as HTMLElement;
        console.log(id, element.offsetHeight);
        // 异步添加节点 避免获取不到父节点宽度
        canvas.setAttribute("width", (element.offsetWidth).toString());
        canvas.setAttribute("height", (element.offsetHeight).toString());
        document.querySelector("#" + id).appendChild(canvas);
        this.build = true;
    }

    public clearAll() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
export default BaseCanvas;
