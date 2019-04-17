const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  //targets the data-sizing variable in our input html to add the property OR addes nothing
  const suffix = this.dataset.sizing || '';
  //updates variable  by selecting entire document by the :root updates the values of the sliders and applies to image
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

//listens to change events by looping over each one and then calls handleUpdate
inputs.forEach(input => input.addEventListener('change', handleUpdate) + 'mousemove');
//listens to mousemove event that triggers everytime you move the mouse over the property
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
