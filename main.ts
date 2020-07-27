function onlit () {
	
}
function offlit () {
	
}
function onwindow () {
	
}
function clowindow () {
	
}
let night = 0
basic.forever(function () {
    if (night) {
        offlit()
        onwindow()
        basic.pause(5000)
    } else {
        // 光照过强
        if (pins.analogReadPin(AnalogPin.P1) > 999) {
            offlit()
            // 开灯后还是强
            if (pins.analogReadPin(AnalogPin.P1) > 999) {
                clowindow()
            }
            basic.pause(5000)
        }
        // 光照太弱
        if (pins.analogReadPin(AnalogPin.P1) < 100) {
            onwindow()
            basic.pause(5000)
            // 开窗后还是强
            if (pins.analogReadPin(AnalogPin.P1) < 100) {
                onlit()
            }
        }
    }
})
