const section1 = 'Design thinking is a process for creative problem solving.';
const section2 = 'Design thinking has a human-centered core. It encourages organizations to focus on the people they’re creating for, which leads to better products, services, and internal processes. When you sit down to create a solution for a business need, the first question should always be what’s the human need behind it?';
const section3 = 'In employing design thinking, you’re pulling together what’s desirable from a human point of view with what is technologically feasible and economically viable. It also allows those who aren’t trained as designers to use creative tools to address a vast range of challenges. The process starts with taking action and understanding the right questions. It’s about embracing simple mindset shifts and tackling problems from a new direction.';

const arr = [section1, section2, section3];
const p = document.querySelectorAll('.article-content p');

for (let i = 0; i < arr.length; i++) {
  p[i].innerHTML = arr[i].split(' ').map(item => `<span>${item}</span>`).join(' ');
}

// The word annotation
const renderAnnotation = (str) => {
  // Create Element
  const span = document.createElement('span');
  
  // Add class
  span.classList.add('info')
  span.innerHTML = str;

  return span;
}


const spans = document.querySelectorAll('.article-content span');

let current;
let text;

// Create the request header
const myHeaders = new Headers();
// Add headers
myHeaders.append("apikey", "sfpAj3CYhOeZ1JjEAxs8f4BZRX63fdqQ");

// Request parameters
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

for(let i = 0; i < spans.length; i++) {
  spans[i].onclick = () => {
    if(current) {
      spans[current].classList.remove('highlight');
      spans[current].innerHTML = text;
    }
    
    // add class
    spans[i].classList.add('highlight');
    text = spans[i].innerText;

    // Send the request
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${text}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      const str = result[0].meanings[0].definitions.slice(0, 2).map((item, i) => `<span>${i + 1}. ${item.definition}</span>`).join("<br />");

      // Add a node
      spans[i].appendChild(renderAnnotation(str));
    })
    .catch(error => {
      // Add a node
      spans[i].appendChild(renderAnnotation(`Not Found`));
      console.log('error', error)
    });

    current = i;
  }
}
