const createResult = () => {
    const start = (a, b, delta) => {
      console.log('[result] Starting...');
      const x1 = (-b + Math.sqrt(delta)) / 2*a;
      const x2 = (-b - Math.sqrt(delta)) / 2*a;
      console.log('[result] Starting done!');
      return { x1, x2 };
    }
  
    const stop = () => {
      console.log('[result] Stopping...');
      console.log('[result] Stopping done!');
    }
  
    return {
      start,
      stop,
    }
  }
  
  export default createResult;