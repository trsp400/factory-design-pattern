const createDelta = () => {
  const start = (a, b, c) => {
    console.log('[delta] Starting...');
    const delta = b**2 - (4*a*c);
    console.log('[delta] Starting done!');
    return delta;
  }

  const stop = () => {
    console.log('[delta] Stopping...');
    console.log('[delta] Stopping done!');
  }

  return {
    start,
    stop,
  }
}

export default createDelta;