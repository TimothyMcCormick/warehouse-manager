console.log('js ativite');

const packages = [
  { heavy: true, priority: false, fragile: false, image: '../package.png', to: 'Harrington', trackingNumber: '1324kjs' },
  { heavy: false, priority: true, fragile: true, image: '../package.png', to: 'Mark', trackingNumber: '1325sdk' },
  { heavy: true, priority: false, fragile: true, image: '../package.png', to: 'Mick', trackingNumber: 'jffd147' },
  { heavy: false, priority: false, fragile: false, image: '../package.png', to: 'Jake', trackingNumber: 'acdc145' },
  { heavy: true, priority: true, fragile: true, image: '../package.png', to: 'Brittany' },
  { heavy: false, priority: true, fragile: false, image: '../package.png', to: 'Zach', trackingNumber: '8081baz' },
  { heavy: true, priority: false, fragile: true, image: '../package.png', to: 'Jeremy', trackingNumber: 'suz2367' }]

let currentPackage = packages
let missingPackage = null

function losePackage() {
  let index = Math.floor(Math.random() * packages.length)
  // console.log(index)
  currentPackage[index]
  missingPackage = currentPackage[index]
  // console.log(missingPackage.to);
}

function drawPackages() {
  let template = ''
  currentPackage.forEach(package => {
    template += `
      <div class="col-md-3 rounded shadow bg-light" onclick="check('${package.to}')">
          <img class="img-fluid" src="${package.image}" alt="">
          <p class="text-center">${package.to}</p>
        </div>
      `
  });
  // console.log(template);
  document.getElementById('packages').innerHTML = template
}

function checkHeavy(){
  let heavyPackage = currentPackage.filter(p => p.heavy == missingPackage.heavy)
  console.log(heavyPackage);
  currentPackage = heavyPackage


  drawPackages()
}

function checkPriority(){
  let priorityPackage = currentPackage.filter(p => p.priority == missingPackage.priority)
  console.log(priorityPackage);
  currentPackage = priorityPackage


  drawPackages()
}

function checkFragile(){
  let fragilePackage = currentPackage.filter(p => p.fragile == missingPackage.fragile)
  console.log(fragilePackage);
  currentPackage = fragilePackage


  drawPackages()
}

function find(attribute){
  let filteredPackages = currentPackage.filter(p => p[attribute] == missingPackage[attribute])
  currentPackage = filteredPackages


  drawPackages()
}

function check(package){
  let found = currentPackage.find(p => p.to == package)
  console.log(found);
  if(found.to == missingPackage.to){
    window.alert('You found the missing package!')
  } else {
    window.alert('You smell like beans')
  }
  
}

function reset(){
  // losePackage()
  drawPackages()
}

losePackage()
drawPackages()