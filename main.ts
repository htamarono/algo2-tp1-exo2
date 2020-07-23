input.onButtonPressed(Button.A, function () {
    if (pos_x > 0) {
        led.unplot(pos_x, posy)
        pos_x += -1
        led.plot(pos_x, posy)
    } else {
        led.unplot(pos_x, posy)
        pos_x = 4
    }
})
input.onButtonPressed(Button.B, function () {
    if (pos_x < 4) {
        led.unplot(pos_x, posy)
        pos_x += 1
        led.plot(pos_x, posy)
    } else {
        led.unplot(pos_x, posy)
        pos_x = 0
    }
})
let pos_x = 0
let posy = 0
let direction_y = 1
posy = 2
pos_x = 0
led.plot(pos_x, posy)
basic.forever(function () {
    led.unplot(pos_x, posy)
    posy += direction_y
    led.plot(pos_x, posy)
    if (posy >= 4) {
        direction_y = -1
    } else if (posy <= 0) {
        direction_y = 1
    }
    basic.pause(1000)
})
