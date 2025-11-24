let num = 0
let ladder = {
    up: function () {
        num = num++
        return this
    },
    down: function () {
        num = num--
        return this
    },
    showStep: function () {
        console.log(num)
        return this
    }
};

ladder.up().up().down().showStep();