var day10 = {};
var bots = {};
var chipHigh;
var chipLow;
var outputs = [];

day10.getBot = function (input, high, low) {
    var lines = require('./get.lines.js')(input);
    chipHigh = high;
    chipLow = low;

    lines.forEach(line => {
        var instruction;

        if (line.startsWith('value')) {
            instruction = day10.parseLoadLine(line);
            bots[instruction.bot] = initBot(bots[instruction.bot]);
            bots[instruction.bot].number = instruction.bot;
            addChip(bots[instruction.bot], instruction.value);
        } else {
            instruction = day10.parseDecisionLine(line);
            bots[instruction.bot] = initBot(bots[instruction.bot]);
            bots[instruction.bot].number = instruction.bot;
            addMovement(bots[instruction.bot], {
                low: instruction.low,
                high: instruction.high
            });
        }

        var botsArray = [];
        for (var key in bots) {
            if (bots.hasOwnProperty(key)) {
                botsArray.push(bots[key]);
            }
        }
    });

    return outputs[0] * outputs[1] * outputs[2];
}

function move(bot) {
    var values = bot.values;
    var movement = bot.movement;
    var low = values[0];
    var high = values[1];
    if (low > high) {
        var temp = low;
        low = high;
        high = temp;
    }

    if (bot.values !== undefined
        && bot.values.indexOf(chipHigh) !== -1
        && bot.values.indexOf(chipLow) !== -1
        && bot.movement !== undefined) {
        console.log('found bot' + bot.number);
    }

    if (movement.low.destination === 'bot') {
        bots[movement.low.number] = initBot(bots[movement.low.number]);
        addChip(bots[movement.low.number], low);
    }

    if (movement.low.destination === 'output') {
        outputs[movement.low.number] = low;
    }

    if (movement.high.destination === 'bot') {
        bots[movement.high.number] = initBot(bots[movement.high.number]);
        addChip(bots[movement.high.number], high);
    }

    if (movement.high.destination === 'output') {
        outputs[movement.high.number] = high;
    }
}

function addMovement(bot, movement) {
    bot.movement = movement;
    if (shouldMove(bot)) {
        move(bot);
        bot.values = [];
    }
}

function addChip(bot, chip) {
    if (bot.values === undefined) {
        bot.values = [];
    }
    bot.values.push(chip);
    if (shouldMove(bot)) {
        move(bot);
        bot.values = [];
    }
}

function shouldMove(bot) {
    if (bot.values !== undefined
        && bot.values.length === 2
        && bot.movement !== undefined) {
        return true;
    }
    return false;
}

function initBot(bot) {
    if (bot === undefined) {
        bot = {};
    }
    return bot;
}


day10.parseLoadLine = function (line) {
    var valueRegexp = /value (.*) goes/;
    var valueMatch = valueRegexp.exec(line);
    var value = valueMatch[1];

    var botRegexp = /to bot (.*)/;
    var botMatch = botRegexp.exec(line);
    var bot = botMatch[1];

    return { value: parseInt(value), bot: parseInt(bot) };
}

day10.parseDecisionLine = function (line) {
    var botRegexp = /bot (.*) gives/;
    var botMatch = botRegexp.exec(line);
    var bot = parseInt(botMatch[1]);

    var lowRegexp = /low to (.*) and/;
    var lowMatch = lowRegexp.exec(line);
    var low = lowMatch[1];

    if (low.includes('output')) {
        low = { destination: 'output', number: parseInt(low.substring(7)) };
    } else {
        low = { destination: 'bot', number: parseInt(low.substring(4)) };
    }

    var highRegexp = /and high to (.*)/;
    var highMatch = highRegexp.exec(line);
    var high = highMatch[1];

    if (high.includes('output')) {
        high = { destination: 'output', number: parseInt(high.substring(7)) };
    } else {
        high = { destination: 'bot', number: parseInt(high.substring(4)) };
    }

    return { bot: bot, low: low, high: high };
}

module.exports = day10;