window.onload = function()
{
       
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    score = 0,
    level = 0,
    direction = 0,
    mato = new Array(3),
    active = true,
    speed = 300;

    
    var map = new Array(50);
    for (var i = 0; i < map.length; i++) {
        map[i] = new Array(50);
    }

    canvas.width = 504;
    canvas.height = 524;

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(canvas);
    
    map = generatemato(map);
   
    map = generateFood(map);

    drawGame();

    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 38 && direction !== 3) {
            direction = 2;
        } else if (e.keyCode === 40 && direction !== 2) {
            direction = 3;
        } else if (e.keyCode === 37 && direction !== 0) {
            direction = 1; 
        } else if (e.keyCode === 39 && direction !== 1) {
            direction = 0;
        }
    });

    function drawGame() 
    {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        for (var i = mato.length - 1; i >= 0; i--) {

            
            if (i === 0) {
                switch(direction) {
                    case 0: 
                        mato[0] = { x: mato[0].x + 1, y: mato[0].y }
                        break;
                    case 1: 
                        mato[0] = { x: mato[0].x - 1, y: mato[0].y }
                        break;
                    case 2: 
                        mato[0] = { x: mato[0].x, y: mato[0].y - 1 }
                        break;
                    case 3: 
                        mato[0] = { x: mato[0].x, y: mato[0].y + 1 }
                        break;
                }

                if (mato[0].x < 0 || 
                    mato[0].x >= 50 ||
                    mato[0].y < 0 ||
                    mato[0].y >= 50) {
                    showGameOver();
                    return;
                }


                if (map[mato[0].x][mato[0].y] === 1) {
                    score += 10;
                    map = generateFood(map);

                    mato.push({ x: mato[mato.length - 1].x, y: mato[mato.length - 1].y });
                    map[mato[mato.length - 1].x][mato[mato.length - 1].y] = 2;

                    if ((score % 50) == 0) {
                        level += 1;
                    }
                
                } else if (map[mato[0].x][mato[0].y] === 2) {
                    showGameOver();
                    return;
                }

                map[mato[0].x][mato[0].y] = 2;
            } else {
                if (i === (mato.length - 1)) {
                    map[mato[i].x][mato[i].y] = null;
                }

                mato[i] = { x: mato[i - 1].x, y: mato[i - 1].y };
                map[mato[i].x][mato[i].y] = 2;
            }
        }

        drawMain();

        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                if (map[x][y] === 1) {
                    ctx.fillStyle = 'black';
                    ctx.fillRect(x * 10, y * 10 + 20, 10, 10);
                } else if (map[x][y] === 2) {
                    ctx.fillStyle = 'orange';
                    ctx.fillRect(x * 10, y * 10 + 20, 10, 10);          
                }
            }
        }
        
        if (active) {
            setTimeout(drawGame, speed - (level * 50));
        }
    }


    function drawMain() 
    {
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'magenta';

        ctx.strokeRect(2, 20, canvas.width - 4, canvas.height - 24);

        ctx.fillStyle = 'green';
        ctx.font = '12px sans-serif';
        ctx.fillText('Pisteet: ' + score + ' - Taso: ' + level, 2, 12);
    }

    function generateFood(map)
    {
        var rndX = Math.round(Math.random() * 49),
            rndY = Math.round(Math.random() * 49);
        
        while (map[rndX][rndY] === 2) {
            rndX = Math.round(Math.random() * 49);
            rndY = Math.round(Math.random() * 49);
        }
        
        map[rndX][rndY] = 1;

        return map;
    }

    function generatemato(map)
    {
        var rndX = Math.round(Math.random() * 49),
            rndY = Math.round(Math.random() * 49);

        while ((rndX - mato.length) < 0) {
            rndX = Math.round(Math.random() * 49);
        }
        
        for (var i = 0; i < mato.length; i++) {
            mato[i] = { x: rndX - i, y: rndY };
            map[rndX - i][rndY] = 2;
        }

        return map;
    }

    function showGameOver()
    {  
        active = false;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'magenta';
        ctx.font = '16px sans-serif';
        
        ctx.fillText('Peli ohi!', ((canvas.width / 2) - (ctx.measureText('Peli ohi!').width / 2)), 50);
        
	ctx.font = '12px sans-serif';

        ctx.fillText('Pisteet: ' + score, ((canvas.width / 2) - (ctx.measureText('Pisteet ' + score).width / 2)), 70);
        
        }
        }
        
   function Restart()
   {
	if(active == false)
   {
	var a = document.createElement('a');
	var linkText = document.createTextNode("Restart");
	a.appendChild(linkText);
	a.title = "Restart";
	a.href = "mato.html";
	document.body.appendChild(a); 		
}
};
