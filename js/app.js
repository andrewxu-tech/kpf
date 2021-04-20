const bubblesContents = [
  {
    name: 'Resilience'
  },
  {
    name: 'Community'
  },
  {
    name: 'Sustainability'
  },
  {
    name: 'Wellness'
  }
];

bubblesContents.forEach(element => {
  const bubbleWrapper = document.createElement('div');
  bubbleWrapper.classList.add('selectable-bubble-wrapper');

  const text = document.createElement('text');
  text.innerHTML = element.name;
  text.id = element.name;
  text.classList.add('bubble-text');
  bubbleWrapper.appendChild(text);

  const bubbleCircle = document.createElement('div');
  bubbleCircle.classList.add('selectable-bubble-circle');
  bubbleWrapper.appendChild(bubbleCircle);

  document.getElementsByTagName('main')[0].appendChild(bubbleWrapper);

  const circleType = new CircleType(document.getElementById(element.name)); // eslint-disable-line
  circleType.radius(200).dir();
});
