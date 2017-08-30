<template lang="html">
  <div>
    <div class="header">
      <div class="header-logo">Ivue</div>
      <div class="header-nav">
        <router-link to="/">主页</router-link>
        <router-link to="/component">组件</router-link>
        <router-link to="/">关于</router-link>
      </div>
    </div>
    <div class="banner">
      <div class="banner-img">
        <img src="../../assets/img/banner.png" alt="">
      </div>
      <div class="banner-text">
        <h1>IVUE UI</h1>
        <p>本人首个vueUI框架</p>
      </div>
      <canvas id="pop"></canvas>
    </div>
    <div class="features">
      <img src="../../assets/img/features.png" alt="">
    </div>
    <div class="wave">
        <canvas id="wave"></canvas>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
  var canvas = document.getElementById('wave');
	var ctx = canvas.getContext('2d');
	canvas.width = canvas.parentNode.offsetWidth;
	canvas.height = canvas.parentNode.offsetHeight;

	var step = 0;

	var lines = ["rgba(0,222,255, 0.2)", "rgba(157,192,249, 0.2)", "rgba(0,168,255, 0.2)"];

	function loop() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		step++;
		//画3个不同颜色的矩形
		for (var j = lines.length - 1; j >= 0; j--) {
			ctx.fillStyle = lines[j];
			//每个矩形的角度都不同，每个之间相差45度
			var angle = (step + j * 45) * Math.PI / 180;
			var deltaHeight = Math.sin(angle) * 50;
			var deltaHeightRight = Math.cos(angle) * 50;
			ctx.beginPath();
			ctx.moveTo(0, canvas.height / 2 + deltaHeight);
			ctx.bezierCurveTo(canvas.width / 2, canvas.height / 2 + deltaHeight - 50, canvas.width / 2, canvas.height / 2 + deltaHeightRight - 50, canvas.width, canvas.height / 2 + deltaHeightRight);
			ctx.lineTo(canvas.width, canvas.height);
			ctx.lineTo(0, canvas.height);
			ctx.lineTo(0, canvas.height / 2 + deltaHeight);
			ctx.closePath();
			ctx.fill();
		}
		requestAnimFrame(loop);
	}

	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	})();
	loop();




  // ---------
  // Functions
  // ---------

  var canvas2 = document.getElementById('pop');
	var ctx2 = canvas2.getContext('2d');
	canvas2.width = canvas2.parentNode.offsetWidth;
	canvas2.height = canvas2.parentNode.offsetHeight;
  var ctx2 = canvas2.getContext('2d');
  var count = canvas2.height;
  var bubbles = [];
  var bubbleCount = 20;
  var bubbleSpeed = 1;
  var popLines = 6;
  var popDistance = 40;
  var mouseOffset = {
    x: 0,
    y: 0
  }



  // --------------
  // Animation Loop
  // --------------

  function animate() {



    // ------------
    // Clear Canvas
    // ------------

    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);



    // ------------
    // Draw Bubbles
    // ------------

    ctx2.beginPath();
    for (var i = 0; i < bubbles.length; i++) {
      // first num = distance between waves
      // second num = wave height
      // third num = move the center of the wave away from the edge
      bubbles[i].position.x = Math.sin(bubbles[i].count/bubbles[i].distanceBetweenWaves) * 50 + bubbles[i].xOff;
      bubbles[i].position.y = bubbles[i].count;
      bubbles[i].render();

      if(bubbles[i].count < 0 - bubbles[i].radius) {
        bubbles[i].count = canvas2.height + bubbles[i].yOff;
      } else {
        bubbles[i].count -= bubbleSpeed;
      }
    }

    // ---------------
    // On Bubble Hover
    // ---------------

    for (var i = 0; i < bubbles.length; i++) {
      if(mouseOffset.x > bubbles[i].position.x - bubbles[i].radius && mouseOffset.x < bubbles[i].position.x + bubbles[i].radius) {
        if(mouseOffset.y > bubbles[i].position.y - bubbles[i].radius && mouseOffset.y < bubbles[i].position.y + bubbles[i].radius) {
          for (var a = 0; a < bubbles[i].lines.length; a++) {
            popDistance = bubbles[i].radius * 0.5;
            bubbles[i].lines[a].popping = true;
            bubbles[i].popping = true;
          }
        }
      }
    }

    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);



  // ------------------
  // Bubble Constructor
  // ------------------

  var createBubble = function() {
    this.position = {x: 0, y: 0};
    this.radius = 8 + Math.random() * 6;
    this.xOff = Math.random() * canvas2.width - this.radius;
    this.yOff = Math.random() * canvas2.height;
    this.distanceBetweenWaves = 50 + Math.random() * 40;
    this.count = canvas2.height + this.yOff;
    this.color = '#8bc9ee';
    this.lines = [];
    this.popping = false;
    this.maxRotation = 85;
    this.rotation = Math.floor(Math.random() * (this.maxRotation - (this.maxRotation * -1))) + (this.maxRotation * -1);
    this.rotationDirection = 'forward';

    // Populate Lines
    for (var i = 0; i < popLines; i++) {
      var tempLine = new createLine();
          tempLine.bubble = this;
          tempLine.index = i;

      this.lines.push(tempLine);
    }

    this.resetPosition = function() {
      this.position = {x: 0, y: 0};
      this.radius = 8 + Math.random() * 6;
      this.xOff = Math.random() * canvas2.width - this.radius;
      this.yOff = Math.random() * canvas2.height;
      this.distanceBetweenWaves = 50 + Math.random() * 40;
      this.count = canvas2.height + this.yOff;
      this.popping = false;
    }

    // Render the circles
    this.render = function() {
      if(this.rotationDirection === 'forward') {
        if(this.rotation < this.maxRotation) {
          this.rotation++;
        } else {
          this.rotationDirection = 'backward';
        }
      } else {
        if(this.rotation > this.maxRotation * -1) {
          this.rotation--;
        } else {
          this.rotationDirection = 'forward';
        }
      }

      ctx2.save();
      ctx2.translate(this.position.x, this.position.y);
      ctx2.rotate(this.rotation*Math.PI/180);

      if(!this.popping) {
        ctx2.beginPath();
        ctx2.strokeStyle = '#8bc9ee';
        ctx2.lineWidth = 1;
        ctx2.arc(0, 0, this.radius - 3, 0, Math.PI*1.5, true);
        ctx2.stroke();

        ctx2.beginPath();
        ctx2.arc(0, 0, this.radius, 0, Math.PI*2, false);
        ctx2.stroke();
      }

      ctx2.restore();

      // Draw the lines
      for (var a = 0; a < this.lines.length; a++) {
        if(this.lines[a].popping) {
          if(this.lines[a].lineLength < popDistance && !this.lines[a].inversePop) {
            this.lines[a].popDistance += 0.06;
          } else {
            if(this.lines[a].popDistance >= 0) {
              this.lines[a].inversePop = true;
              this.lines[a].popDistanceReturn += 1;
              this.lines[a].popDistance -= 0.03;
            } else {
              this.lines[a].resetValues();
              this.resetPosition();
            }
          }

          this.lines[a].updateValues();
          this.lines[a].render();
        }
      }
    }
  }



  // ----------------
  // Populate Bubbles
  // ----------------

  for (var i = 0; i < bubbleCount; i++) {
    var tempBubble = new createBubble();

    bubbles.push(tempBubble);
  }



  // ----------------
  // Line Constructor
  // ----------------

  function createLine() {
    this.lineLength = 0;
    this.popDistance = 0;
    this.popDistanceReturn = 0;
    this.inversePop = false; // When the lines reach full length they need to shrink into the end position
    this.popping = false;

    this.resetValues = function() {
      this.lineLength = 0;
      this.popDistance = 0;
      this.popDistanceReturn = 0;
      this.inversePop = false;
      this.popping = false;

      this.updateValues();
    }

    this.updateValues = function() {
      this.x = this.bubble.position.x + (this.bubble.radius + this.popDistanceReturn) * Math.cos(2 * Math.PI * this.index / this.bubble.lines.length);
      this.y = this.bubble.position.y + (this.bubble.radius + this.popDistanceReturn) * Math.sin(2 * Math.PI * this.index / this.bubble.lines.length);
      this.lineLength = this.bubble.radius * this.popDistance;
      this.endX = this.lineLength;
      this.endY = this.lineLength;
    }

    this.render = function() {
      this.updateValues();

      ctx2.beginPath();
      ctx2.strokeStyle = '#8bc9ee';
      ctx2.lineWidth = 2;
      ctx2.moveTo(this.x, this.y);
      if(this.x < this.bubble.position.x) {
        this.endX = this.lineLength * -1;
      }
      if(this.y < this.bubble.position.y) {
        this.endY = this.lineLength * -1;
      }
      if(this.y === this.bubble.position.y) {
        this.endY = 0;
      }
      if(this.x === this.bubble.position.x) {
        this.endX = 0;
      }
      ctx2.lineTo(this.x + this.endX, this.y + this.endY);
      ctx2.stroke();
    };
  }



  // ---------------
  // Event Listeners
  // ---------------

  canvas2.addEventListener('mousemove', mouseMove);

  function mouseMove(e) {
    mouseOffset.x = e.offsetX;
    mouseOffset.y = e.offsetY;
  }

  window.addEventListener('resize', function() {
    canvas2.width = document.body.clientWidth;
    canvas2.height = document.body.clientHeight;
  });


  // ---------------
  // Event Listeners
  // ---------------
}
}
</script>

<style lang="scss">
.header{
  position: absolute;
  top: 0;
  left: 0;
  line-height: 60px;
  color: #fff;
  padding: 0 25px;
  width:100%;
  z-index: 2;
  .header-logo{
    font-size: 30px;
    font-weight: bold;
    float: left;
  }
  .header-nav{
    float: right;
    a{
      color: #fff;
      margin-left: 20px;
    }
  }
}
.wave{
  width:100%;
  height: 300px;
}
#pop{
  position: absolute;
  top: 0;
  left: 0;
  width:100%;
}

.banner{
  width:100%;
  height: 500px;
  background: #00afe9;
  color: #fff;
  .banner-img{
    width:300px;
    float: left;
    margin-left: 200px;
    margin-top: 150px;
  }
  .banner-text{
    float: right;
    padding-right: 400px;
    padding-top: 150px;
  h1{
    font-weight: bold;
    font-size: 60px;
    margin-bottom: 20px;
  }
  p{
    font-size: 20px;
  }
  }
}
.features{
  text-align: center;
  padding: 50px 0 20px;
  img{
    width:1000px;
  }
}
</style>
