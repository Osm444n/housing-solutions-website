// Animated counters
function animateCount(el, target, duration=1200){
  const start=0, startTime=performance.now();
  function tick(now){
    const p=Math.min(1,(now-startTime)/duration);
    const value=Math.floor(start+(target-start)*(0.5-Math.cos(Math.PI*p)/2));
    el.textContent=value.toLocaleString();
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('.counter .num').forEach(el=>{
  const target=parseInt(el.getAttribute('data-target'),10);
  animateCount(el,target);
});
