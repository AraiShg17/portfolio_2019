export default () => {

  /* ステージを作成 */
  const stage = new createjs.Stage('canvasM')
  /* 配列でパーティクルを管理します */
  let particles = []
  /* マウス位置を保存 */
  let pos = {posX: 0, posY: 0}

  /* tick イベントを登録する */
  tick()

  /* 毎フレーム時に実行されるループイベントです */
  function tick() {
    stage.canvas.width = document.querySelector('#canvasM').parentNode.parentNode.clientWidth
    stage.canvas.height = document.querySelector('#canvasM').parentNode.parentNode.clientHeight

    /* パーティクルを発生 */
    emitParticles()
    /* パーティクルを更新 */
    updateParticles()
    /* 画面を更新する */
    stage.update()

    requestAnimationFrame(tick)
  }

  let count = 0 /* tick イベントの回数 */
  let MAX_LIFE = 100 /* 寿命の最大値 */
  /* パーティクルを発生させます */
  function emitParticles() {

    /* パーティクルの生成 */
    /* カウントの更新 */
    count += 1

    if(
      ((pos.posX > stage.mouseX - 1) && (pos.posX < stage.mouseX + 1)) ||
      ((pos.posY > stage.mouseY - 1) && (pos.posY < stage.mouseY + 1))
    ) { return }
    pos.posX = stage.mouseX
    pos.posY = stage.mouseY


    if ((count % 2) !== 0) { return }

    /* オブジェクトの作成 */
    const particle = new createjs.Shape()
    if(Math.random() < 0.5){
      particle.graphics
        .beginFill(createjs.Graphics.getHSL(255, 255, 255))
        .drawCircle(0, 0, 70 * Math.random())
    } else {
      particle.graphics
        .beginStroke(createjs.Graphics.getHSL(255, 255, 255))
        .setStrokeStyle(Math.ceil(Math.random() * 3))
        .drawCircle(0, 0, 70 * Math.random())
    }
    stage.addChild(particle)
    particle.compositeOperation = 'lighter'
    particle.alpha = Math.random() * 0.1
    /* パーティクルの発生場所 */
    particle.x = stage.mouseX
    particle.y = stage.mouseY
    /* 動的にプロパティーを追加します。 */
    /* 速度 */
    particle.vx = 30 * (Math.random() - 0.5)
    particle.vy = 30 * (Math.random() - 0.5)
    /* 寿命 */
    particle.life = MAX_LIFE
    particles.push(particle)
  }

  /* パーティクルを更新します */
  function updateParticles() {
    /* パーティクルの計算を行う */
    for (let i = 0; i < particles.length; i++) {
      /* オブジェクトの作成 */
      const particle = particles[i]
      /* 透明度 */
      particle.alpha = (Math.random() * 0.05) + 0.1
      /* 重力 */
      particle.vy -= .5
      /* 摩擦 */
      particle.vx *= 0.96
      particle.vy *= 0.96
      /* 速度を位置に適用 */
      particle.x += particle.vx / 10
      particle.y += particle.vy / 10
      /* 地面 */
      if (particle.y > stage.canvas.height) {
        particle.y = stage.canvas.height /* 行き過ぎ補正 */
        particle.vy *= -1 /* Y軸の速度を反転 */
      }
      /* パーティクルのサイズをライフ依存にする */
      const scale = particle.life / MAX_LIFE
      particle.scaleX = particle.scaleY = scale
      /* 寿命を減らす */
      particle.life -= 1
      /* 寿命の判定 */
      if (particle.life <= 0) {
        /* ステージから削除 */
        stage.removeChild(particle)
        /* 配列からも削除 */
        particles.splice(i, 1)
      }
    }
  }

  /* 初期値の上書き。 */
  /* 画面の中央からパーティクルが表示するよう強制的に設定。 */
  /* 必須ではないオマケの処理です。 */
  stage.mouseX = stage.canvas.width / 2
  stage.mouseY = stage.canvas.height * 1 / 3

}
