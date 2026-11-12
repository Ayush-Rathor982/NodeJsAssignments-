const handleSubmit = (event) =>{
      event.preventDefault();

      let product = event.target.productName.value;

      let obj = {
        productName : product
      }


      axios.post("http://localhost:3000/api/products",obj)
      .then(res => {
            console.log("Response from server: ",res.data);
      })
}
