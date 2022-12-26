export const sleep = (time: number) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(true), time);
    });
};

export const sleepSync = (timeMs: number) => {
    const time = Date.now();
    while ((Date.now() - time) < timeMs) {
    }
}