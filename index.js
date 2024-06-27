function distanceFromHqInBlocks(location) {
    const hq = 42;
    return Math.abs(location - hq);
}

function distanceFromHqInFeet(location) {
    const blocks = distanceFromHqInBlocks(location);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const distance = Math.abs(start - destination) * 264;
    return distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        const fare = (distance - 400) * 0.02;
        return fare
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
