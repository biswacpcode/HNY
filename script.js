function getRandomColor() {
    const minBrightness = 200; // Adjust this value to control brightness
    const randomColor = () => Math.floor(Math.random() * 256);
  
    let color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  
    // Ensure the color is bright
    while (colorBrightness(color) < minBrightness) {
      color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
  
    return color;
  }
  function colorBrightness(color) {
    // Calculate the brightness of a color
    const rgb = color.match(/\d+/g);
    return (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]);
  }
  
  function moveAndFade(element, vx, vy) {
    let opacity = 1;
    vx=vx/4;
    vy=vy/4;
    const fadeInterval = setInterval(() => {
      // Update position
      let left = parseFloat(element.style.left || 0);
      let top = parseFloat(element.style.top || 0);
      element.style.left = left + vx + 'px';
      element.style.top = top + vy + 'px';
  
      // Update opacity
      opacity -= 0.02;
      element.style.opacity = opacity;
  
      // Check if the particle is faded out
      if (opacity <= 0) {
        // Remove the element and clear the interval
        element.remove();
        clearInterval(fadeInterval);
      }
    }, 10); // Adjust the interval as needed
  }
  
  let mainElements = document.getElementsByClassName('main');
  
  for (let i = 0; i < mainElements.length; i++) {
    mainElements[i].addEventListener('mousemove', function(event){
      // Create a new div element with the class 'particle'
      
      for ( let i =1;  i <= 50; i++){
      let particle = document.createElement('div');
      particle.classList.add('particle');
  
      // Set the position of the particle at the mouse click position
      particle.style.left = (event.clientX - particle.offsetWidth / 2) + 'px';
      particle.style.top = (event.clientY - particle.offsetHeight / 2) + 'px';
        particle.style.background = getRandomColor();
  
      // Add random initial velocity
      let angle = Math.random() * Math.PI * 2;
      let speed = Math.random() * 5 + 5;
      let vx = Math.cos(angle) * speed;
      let vy = Math.sin(angle) * speed;
  
      // Append the particle to the document body
      document.body.appendChild(particle);
  
      // Move and fade the particle
      moveAndFade(particle, vx, vy);
      }
    });
    
    mainElements[i].addEventListener('touchmove', function(event){
      // Create a new div element with the class 'particle'
      
      for ( let i =1;  i <= 10; i++){
      let particle = document.createElement('div');
      particle.classList.add('particle');
  
      // Set the position of the particle at the mouse click position
      particle.style.left = (event.clientX - particle.offsetWidth / 2) + 'px';
      particle.style.top = (event.clientY - particle.offsetHeight / 2) + 'px';
        particle.style.background = getRandomColor();
  
      // Add random initial velocity
      let angle = Math.random() * Math.PI * 2;
      let speed = Math.random() * 5 + 5;
      let vx = Math.cos(angle) * speed;
      let vy = Math.sin(angle) * speed;
  
      // Append the particle to the document body
      document.body.appendChild(particle);
  
      // Move and fade the particle
      moveAndFade(particle, vx, vy);
      }
    });
  }
  