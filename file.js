  // function OnClick() {
  //     var value1 = document.getElementById("input_name1").value;
  //     var value2 = document.getElementById("input_name2").value;
  //     var value3 = document.getElementById("input_name3").value;
  //     console.log(value1, value2, value3); 
  // }



  //arrow function
  //  var OnClick = (value1, value2, value3) => {
  //     var value1 = document.getElementById("input_name1").value;
  //     var value2 = document.getElementById("input_name2").value;
  //     var value3 = document.getElementById("input_name3").value;
  //     console.log(value1, value2, value3);
  // }

  const loadFunction = (a) => { return (a * a) }
  var carre = loadFunction(a)
  console.log(carre)
  var a = 10;
  var take = a => {
      return loadFunction(a + a)
  }
  var value = take(loadFunction(a));
  console.log(value)


  // var affiche = [1, 2, 3, 4]
  // affiche.forEach(element => {
  //     console.log(element)
  //     var affiche2 = affiche[element] * 2
  // });



  // var array = [1, 2, 3, 4]
  // var affiche = (element, index) => {
  //     console.log(element)
  //     return element * 2
  // }
  // var affiche2 = array.map(affiche)
  // console.log(affiche2)



  //  const users = [
  //      { id: 1, name: "salah", age: 13 },
  //      { id: 2, name: "ali", age: 23 },
  //      { id: 3, name: "rayen", age: 24 },
  //  ]
  //  console.log(users)
  //  var addage = element => {
  //      if (element.age < 20) {
  //          element.age += 2
  //      } else if (element.age >= 20) {
  //          element.age -= 1
  //      }
  //      return element;

  //  };

  //  var addage = users.map(addage)
  //  console.log("newwww", addage)