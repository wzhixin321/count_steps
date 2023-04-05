input.onGesture(Gesture.Shake, function () {
    步数 = input.acceleration(Dimension.X)
    basic.showNumber(步数)
    步数 += 1
    if (步数 > 500) {
        music.playMelody("G F E B - G E E ", 120)
    }
})
let 步数 = 0
步数 = 0
