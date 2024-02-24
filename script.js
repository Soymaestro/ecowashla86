document.getElementById("login-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "lavaderola86" && password === "administrador"){
        // Si las credenciales son correctas, redirigir al usuario a la página deseada
        window.location.href = "REGISTROLAV2023.html";
    } else {
        alert("NOMBRE DE USUARIO O CONTRASEÑA INCORRECTA. Inténtalo de nuevo. Olvidaste la contraseña? Comunicate con Daniel Cruz para mas info");
    }
});
