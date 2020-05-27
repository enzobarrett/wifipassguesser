function tick() {
  const element = (
      <p>{new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p>
  );
  ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);

