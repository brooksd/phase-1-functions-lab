// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    return blocks > 42 ? blocks - 42 : 42 - blocks;
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return (start < destination) ? (destination - start) * 264 : (start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (2/100) * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
        return 25;
    } else {
        return "cannot travel that far"
    }
}
