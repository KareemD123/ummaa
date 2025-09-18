export const animateCountUp = (
  element: HTMLElement,
  target: number,
  duration: number = 1500,
) => {
  const startTime = performance.now();
  const isPlus = element.textContent?.includes("+");

  const updateCount = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out function for smooth deceleration
    const easeOutQuad = (t: number) => t * (2 - t);
    const current = Math.floor(easeOutQuad(progress) * target);

    element.textContent = current.toString() + (isPlus ? "+" : "");

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      // Ensure we end exactly at the target
      element.textContent = target.toString() + (isPlus ? "+" : "");
    }
  };

  requestAnimationFrame(updateCount);
};
