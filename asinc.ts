function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncExample(): Promise<void> {
    console.log("Start");
    await delay(2000);
    console.log("After 2 seconds");
}

asyncExample();
