  function reako(){
    console.log("hello")
  }
  setTimeout(reako,4000)

  setTimeout(()=>{
    console.log("hello")
  },4000)

  console.log("hello");
  console.log("hello1")
  function hello(){
    console.log("hello2");
    
  }setTimeout(hello,2000)
  console.log("hello3")

  