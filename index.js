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

// Simulating an asynchronous operation
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

// Using async/await
async function getData() {
  try {
    console.log("Fetching data...");
    const result = await fetchData(); // Waits for the Promise to resolve
    console.log(result); // Logs: "Data fetched successfully!"
  } catch (error) {
    console.error("Error:", error); // Handles any errors
  }
}

getData();


  





