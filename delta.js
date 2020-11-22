const createDelta = () => {
  const start = (a, b, c) => {
    console.log('[delta] Starting...');
    const data = b**2 - (4*a*c);
    
    let deltaType = ''
    if (data === 0) {
      deltaType = 'zero'
    } else if (data > 0) {
      deltaType = 'positive'
    } else if (data < 0) {
      deltaType = 'negative'
    }

    console.log('[delta] Starting done!');
    return { data, deltaType };
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