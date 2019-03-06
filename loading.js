
class Loading {
    constructor(node, expand = '') {
        if (typeof node == 'undefined') {
            throw new Error(' node is not Element ');
        }
        const defaultexpand = {
            bgColor: "#eef7e4",
            fillColor: "#49f",
            fontSize: 18,
            fontColor: "#49f",
            lineWidth: 2
        }
        this.el = node;
        this.expand = {
            defaultexpand,
            ...expand
        }
        this.speed = 1;
        this.loading();
    }

    loading() {
        let ctx = this.el.getContext("2d");
        ctx.save();
        ctx.clearRect(0, 0, this.width, this.height);
        let centerX = this.el.width / 2;
        let centerY = this.el.height / 2;
        let newRadius = (Math.PI * 2) / 100;
        let radius = centerX - this.expand.lineWidth;
        ctx.save();
        /* 绘制外圈 */
        ctx.beginPath();
        ctx.lineWidth = this.expand.lineWidth;
        ctx.strokeStyle = this.expand.bgColor;
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        ctx.save();
        /* 绘制文字 */
        ctx.beginPath();
        ctx.fillStyle = this.expand.fontColor;
        ctx.font = this.expand.fontSize + "px sans-serif";
        let textWidth = ctx.measureText(this.speed.toFixed(0) + "%").width;
        ctx.fillText(
            this.speed.toFixed(0) + "%",
            centerX - textWidth / 2,
            centerY + this.expand.fontSize / 2
        );
        ctx.restore();
        ctx.save();
        /* 绘制运动外圈 */
        ctx.beginPath();
        ctx.strokeStyle = this.expand.fillColor;
        ctx.lineWidth = 2;
        ctx.arc(
            centerX,
            centerY,
            radius,
            -Math.PI / 2,
            -Math.PI / 2 + this.speed * newRadius,
            false
        );
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        if (this.speed >= this.progress) {
            this.speed = 0;
            return;
        }
        this.speed += 1;
        window.requestAnimationFrame(this.loading);
    }

}