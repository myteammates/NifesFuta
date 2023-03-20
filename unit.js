const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('p');
  
      if (entry.isIntersecting) {
        square.classList.add('animate-01');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate-01');
    });
  });
observer.observe(document.querySelector('#section1'));

/*************************************/
const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.div2');
  
      if (entry.isIntersecting) {
        square.classList.add('animate2');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate2');
    });
  });
  observer1.observe(document.querySelector('#section3'));

  /*************************************/
  const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.div1');
  
      if (entry.isIntersecting) {
        square.classList.add('animate1');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate1');
    });
  });
  observer2.observe(document.querySelector('#section3'));

/*************************************/
  const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.div2');
  
      if (entry.isIntersecting) {
        square.classList.add('animate2');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate2');
    });
  });
  observer3.observe(document.querySelector('#section2'));

  /*************************************/
  const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.div3');
  
      if (entry.isIntersecting) {
        square.classList.add('animate1');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate1');
    });
  });
  observer4.observe(document.querySelector('#section2'));

/*************************************/
  const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.div1');
  
      if (entry.isIntersecting) {
        square.classList.add('animate3');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate3');
    });
  });
  observer5.observe(document.querySelector('#section4'));

  /*************************************/
  const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.div2');
  
      if (entry.isIntersecting) {
        square.classList.add('animate4');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('animate4');
    });
  });
  observer6.observe(document.querySelector('#section4'));