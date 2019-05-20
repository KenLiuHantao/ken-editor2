/**
 * Created by liuhantao on 2019/2/21.
 */
interface renderConfig {
    x:number;
    y:number;
    background:string;
}
class NodeModel {
    public id:number;
    public fileName:string = "defeatNode";
    public tag:string;
    public type:string;//区分正常节点 聚合节点之类
    protected  state : string; //区分 默认 选中 忽略 等状态
    public renderConfig: renderConfig;


    constructor(config?:NodeModel) {
        this.id = config.id;
        this.fileName = config.fileName;
        this.tag = config.tag;
        this.type = config.type;
        this.state = config.state;
    }

    public render(canvas:HTMLCanvasElement) {
        let ctx = canvas.getContext('2d');
        ctx.lineWidth = 2;
        //新需求 如果节点有背景色的时候优先用节点的背景色 没有再用默认的
        if (this.renderConfig.background != null) {
            if (!this.state) {
                ctx.fillStyle = this.renderConfig.background;
            } else {
                ctx.fillStyle = "rgba(66,139,202,0.3)";
            }
        } else {
            if (!this.type) {
                ctx.fillStyle = "#fff";
            } else {
                ctx.fillStyle = "rgba(66,139,202,0.3)";
            }
        }
        ctx.roundRect(this.renderConfig.x - 60, this.renderConfig.y - 40, 120, 80, 10).fill();
        ctx.strokeStyle = "#8a8787";
        ctx.roundRect(this.renderConfig.x - 60, this.renderConfig.y - 40, 120, 80, 10).stroke();
        ctx.font = "35px iconfont";
        let icon = document.createElement('i');
        //icon 为空的时候用默认的
        if (this.icon == null || this.icon == 'null') {
            this.icon = '&#xe629';
        }
        icon.innerHTML = this.icon;
        let content = icon.textContent;
        ctx.fillStyle = "black";
        //新需求 如果有图片优先图片 没有图片才icon
        if (this.backgroundImage != 'undefined' && this.backgroundImage != 'null' && this.backgroundImage != '' && this.backgroundImage != null) {
            var Img = new Image();
            var that = this;
            Img.onload = function () {
                draw(this);
            };
            Img.src = that.backgroundImage;
            function draw(obj) {
                ctx.msImageSmoothingEnabled = false;
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(obj, that.x - ctx.measureText(content).width, that.y - 20, 25, 25);
            }

            ctx.font = "16px Arial bold";
            //新需求 有别名的时候优先展示别名
            if (this.Alias) {
                ctx.fillText(this.Alias, this.x - ctx.measureText(this.Alias).width / 2, this.y + 25);
            } else {
                ctx.fillText(this.name, this.x - ctx.measureText(this.name).width / 2, this.y + 25);
            }
        } else {
            if (this.icon != null && this.icon != 'null') {
                ctx.fillText(content, this.x - ctx.measureText(content).width / 2, this.y);
                ctx.font = "16px Arial bold";
                //新需求 有别名的时候优先展示别名
                if (this.Alias) {
                    ctx.fillText(this.Alias, this.x - ctx.measureText(this.Alias).width / 2, this.y + 25);
                } else {
                    ctx.fillText(this.name, this.x - ctx.measureText(this.name).width / 2, this.y + 25);
                }
            } else {
                ctx.font = "16px Arial bold";
                //新需求 有别名的时候优先展示别名
                if (this.Alias) {
                    ctx.fillText(this.Alias, this.x - ctx.measureText(this.Alias).width / 2, this.y + 25);
                } else {
                    ctx.fillText(this.name, this.x - ctx.measureText(this.name).width / 2, this.y + 25);
                }
            }
        }
        //画可供链接的圆
        ctx.beginPath();
        if (this.type == 'sourceData') {
            ctx.arc(this.x + 60, this.y, 10, 0, 2 * Math.PI);
        } else if (this.type == 'targetData') {
            ctx.arc(this.x - 60, this.y, 10, 0, 2 * Math.PI);
        } else {
            ctx.arc(this.x + 60, this.y, 10, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(this.x - 60, this.y, 10, 0, 2 * Math.PI);
        }
        ctx.stroke();
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.closePath();
    }

}
export default NodeModel;
