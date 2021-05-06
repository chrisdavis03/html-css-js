let data = [
  {
    name: 'Mateo',
    age: '30'
  },
  {
    name: 'Chris',
    age: '25'
  },
  {
    name: 'Andy',
    age: '38'
  },
  {
    name: 'David',
    age: '35'
  },
  {
    name: 'Max',
    age: '29'
  },
  {
    name: 'Lisa',
    age: '32'
  }
]

const info = document.querySelector('#info')

let details = data.map(function(item) {
  return (
    '<div>' + item.name + ' is ' + item.age + ' years old. ' + '</div>'
  );

})

info.innerHTML = details.join('\n');
