
function animate(el) {
    const canvas = el;
    const ctx = canvas.getContext("2d");
    let dots = [];
    for (let i = 0; i < 50; i++) {
        let obj = {};
        obj.x = Math.random() * canvas.width;
        obj.y = Math.random() * canvas.height;
        obj.r = Math.random() * 10;
        obj.speedX = Math.random() * 2;
        obj.speedY = Math.random() * 2;
        dots.push(obj);
    }
    canvas.width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    canvas.height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
    const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < dots.length; i++) {
            let item = dots[i];
            ctx.beginPath();
            ctx.arc(item.x, item.y, item.r, 0, 360);
            ctx.closePath();
            ctx.fillStyle = "#ddd";
            ctx.fill();
            item.speedX =
                item.x < canvas.width && item.x > 0
                    ? item.speedX
                    : -item.speedX;
            item.speedY =
                item.y < canvas.height && item.y > 0
                    ? item.speedY
                    : -item.speedY;
            item.x += item.speedX / 2;
            item.y += item.speedY / 2;
            for (let j = 0; j < dots.length; j++) {
                let item1 = dots[j];
                if (i !== j) {
                    const dx = item.x - item1.x,
                        dy = item.y - item1.y,
                        d = Math.sqrt(dx * dx + dy * dy);
                    if (d < 150) {
                        ctx.beginPath();
                        ctx.moveTo(item.x, item.y);
                        ctx.lineTo(item1.x, item1.y);
                        ctx.strokeStyle = "#ddd";
                        ctx.stroke();
                    }
                }
            }
        }
        window.requestAnimationFrame(draw);
    };
    draw();
}