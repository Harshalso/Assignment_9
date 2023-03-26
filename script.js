class User {
    constructor(email, password) {
      this.email = email;
      this.password = password;
      this.loggedIn = false;
    }
    
    login() {
      this.loggedIn = true;
    }
    
    logout() {
      this.loggedIn = false;
    }
  }
  
  const user = new User("example@gmail.com", "password");
  
  const loginBtn = document.getElementById("login");
  const logoutBtn = document.getElementById("logout");
  const status = document.getElementById("status");
  
  loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email === user.email && password === user.password) {
      user.login();
      status.innerText = `Status: Logged in as ${user.email}`;
    } else {
      alert("Invalid email or password!");
    }
  });
  
  logoutBtn.addEventListener("click", () => {
    user.logout();
    status.innerText = "Status: Logged out";
  });
  