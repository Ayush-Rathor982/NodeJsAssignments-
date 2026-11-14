
document.addEventListener('DOMContentLoaded', async ()=>{
    
    const users = await axios.get('http://localhost:3000/api/users')

    for(let i=0; i<users.data.length; i++){
        display(users.data[i])
    }

    console.log("getting users from server: ",users.data);
});


const handleSubmit = async (event) =>{
      event.preventDefault();

      let form = event.target;



      let user = {
        username : form.username.value,
        phone : form.phone.value,
        email : form.email.value
      }


      console.log("user data: ", user);


      await axios.post("http://localhost:3000/api/users",user)
      .then(res => {
            console.log("Response from server: ",res.data);
            display(res.data)
      })
}



function display(user) {
    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    li.id = user.id;

    const username = document.createElement("p");
    username.textContent = `Username: ${user.username}`;

    const phone = document.createElement("p");
    phone.textContent = `Phone: ${user.phone}`;

    const email = document.createElement("p");
    email.textContent = `Email: ${user.email}`;

    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";

    delbtn.addEventListener("click", () => {
        Delete(user.id, li);
    });

    li.append(username, phone, email, delbtn);
    ul.appendChild(li);
}



async function Delete(id, li) {
    try {
        const response = await axios.delete(
            `http://localhost:3000/api/users/${id}`
        );

        if (response.status === 200) {
            li.remove();
            alert(response.data.message);
        }

    } catch (error) {
        console.log("Error deleting user:", error);

        alert(
            error.response?.data?.message || "Failed to delete user"
        );
    }
}
