$(document).ready(function () {
    var ball = $("#ball");
    $(document).keydown(function (e) {
        switch (e.which) {
            case 37: // left
                if (!isCollision(ball, "left")) {
                    ball.css("left", ball.position().left - 50 + "px");
                }
                break;
            case 38: // up
                if (!isCollision(ball, "up")) {
                    ball.css("top", ball.position().top - 50 + "px");
                }
                break;
            case 39: // right
                if (!isCollision(ball, "right")) {
                    ball.css("left", ball.position().left + 50 + "px");
                }
                break;
            case 40: // down
                if (!isCollision(ball, "down")) {
                    ball.css("top", ball.position().top + 50 + "px");
                }
                break;
        }
        if (isCollision(ball, "finish")) {
            
            console.log("collision happen");
            alert("You won!");
        }
        else if (isCollision(ball,"lose")) {
            alert("You lose");
        }
    });
});

function isCollision(ball, direction) {
    var x = ball.position().left;
    var y = ball.position().top;
    switch (direction) {
        case "left":
            x = x - 50;
            break;
        case "up":
            y = y - 50;
            break;
        case "right":
            x = x + 50;
            break;
        case "down":
            y = y + 50;
            break;
        case "finish":
            var finish = $("#finish");
            recthit();
            break;
        case "lose":
            var lose = $(".wall");
    }
}
function recthit() {

    var r1 = $("#ball");
    var r2 = $("#finish");

    var r1x = r1.offset().left;
    var r1w = r1.width();
    var r1y = r1.offset().top;
    var r1h = r1.height();

    var r2x = r2.offset().left;
    var r2w = r2.width();
    var r2y = r2.offset().top;
    var r2h = r2.height();

    if (r1y + r1h < r2y || r1y > r2y + r2h || r1x > r2x + r2w || r1x + r1w < r2x) {
        console.log(false);
        return false;
    } else {
        console.log(true);
        alert("you win");
        return true;
    }
}



