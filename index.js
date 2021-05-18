const distanceFromHqInBlocks = block => Math.abs(42 - block);
const distanceFromHqInFeet = block => distanceFromHqInBlocks(block) * 264;
const distanceTravelledInFeet = (block1, block2) => Math.abs(block1 - block2) * 264;
function calculatesFarePrice(a, b)
{
    if (distanceTravelledInFeet(a, b) <= 400)
    {
        return 0;
    }
    else if (distanceTravelledInFeet(a, b) < 2000)
    {
        return (distanceTravelledInFeet(a, b) - 400) * 0.02;
    }
    else if (distanceTravelledInFeet(a,b) < 2500)
    {
        return 25;
    }
    else
    {
        return `cannot travel that far`;
    }
} 