(()=>{const e=async e=>{try{if(!(await fetch("https://clicker-backend.onrender.com/auth/register",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})).ok)throw new Error("Registration failed");alert("your are registred successfully"),setTimeout((()=>{window.location.href="./login.html"}),2e3)}catch(e){console.error(e)}};document.getElementById("registration-form").addEventListener("submit",(async t=>{t.preventDefault();const n={name:document.getElementById("name").value,email:document.getElementById("email").value,password:document.getElementById("password").value};await e(n)}))})();
//# sourceMappingURL=register.js.map