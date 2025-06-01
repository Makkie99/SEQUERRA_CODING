const authForm = document.getElementById('authForm');
const secretContent = document.getElementById('secretContent');
const userEmail = document.getElementById('userEmail');
const userPassword = document.getElementById('userPassword');
const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signOutButton = document.getElementById('signOutButton');

const pochacoErrorMessages = [
    "Oops! We needs your email address!",
    "Don't forget your password!",
    "lease fill in all the fields!"
];

function createSparkle() {
    const sparkles = ['✨', '🌟', '💫', '⭐', '🐾'];
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '1000';
    sparkle.style.animation = 'sparkle 3s ease-out forwards';
    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% { 
            opacity: 1; 
            transform: scale(0) rotate(0deg); 
        }
        50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0) rotate(360deg); 
        }
    }
`;
document.head.appendChild(style);

setInterval(createSparkle, 4000);

function validateForm() {
    const email = userEmail.value.trim();
    const password = userPassword.value.trim();
    
    if (!email) {
        showPochacoAlert(pochacoErrorMessages[0], 'error');
        return false;
    }
    
    if (!password) {
        showPochacoAlert(pochacoErrorMessages[1], 'error');
        return false;
    }
    
    if (!email.includes('@')) {
        showPochacoAlert("Needs a proper email with @ symbol! 📧", 'error');
        return false;
    }
    
    return true;
}

function showPochacoAlert(message, type = 'success') {
    if (typeof Swal !== 'undefined') {
        const icon = type === 'error' ? '🐕💔' : '🐶✨';
        Swal.fire({
            title: icon,
            text: message,
            background: '#FFF0F5',
            color: '#8B4513',
            confirmButtonColor: '#FF69B4',
            confirmButtonText: 'OK!',
            showClass: {
                popup: 'animate__animated animate__bounceIn'
            },
            hideClass: {
                popup: 'animate__animated animate__bounceOut'
            }
        });
    } else {
        alert(message);
    }
}

signUpButton.addEventListener('click', function() {
    if (validateForm()) {

        for (let i = 0; i < 8; i++) {
            setTimeout(() => createSparkle(), i * 100);
        }
        
        showPochacoAlert(pochacoDogMessages[Math.floor(Math.random() * pochacoDogMessages.length)]);
        
        setTimeout(() => {
            authForm.style.display = 'none';
            secretContent.style.display = 'block';
            secretContent.style.animation = 'fadeIn 0.8s ease-in';
        }, 2000);
    }
});

signInButton.addEventListener('click', function() {
    if (validateForm()) {

        for (let i = 0; i < 8; i++) {
            setTimeout(() => createSparkle(), i * 100);
        }
        
        showPochacoAlert("Welcome back! 💕");
        
        setTimeout(() => {
            authForm.style.display = 'none';
            secretContent.style.display = 'block';
            secretContent.style.animation = 'fadeIn 0.8s ease-in';
        }, 2000);
    }
});

signOutButton.addEventListener('click', function() {
    showPochacoAlert("Bye bye!👋");
    
    setTimeout(() => {
        secretContent.style.display = 'none';
        authForm.style.display = 'block';
        authForm.style.animation = 'fadeIn 0.8s ease-in';
        
        userEmail.value = '';
        userPassword.value = '';
    }, 2000);
});

userEmail.addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
    this.placeholder = '✨ Enter your email ✨';
});

userEmail.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
    this.placeholder = 'email';
});

userPassword.addEventListener('focus', function() {
    this.style.transform = 'scale(1.02)';
    this.placeholder = '🔐 Enter your password 🔐';
});

userPassword.addEventListener('blur', function() {
    this.style.transform = 'scale(1)';
    this.placeholder = 'password';
});

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            createSparkle();
        });
        
        item.addEventListener('click', function() {
            const messages = [
                "Traveling is so nice! ✈️",
                "What a beautiful city! 🏙️",
                "Island life, always. 🏝️",
                "Good food! 🍽️"
            ];
            
            const index = Array.from(menuItems).indexOf(this);
            showPochacoAlert(messages[index] || "Woof woof! 🐕");
        });
    });
});

const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from { 
            opacity: 0; 
            transform: translateY(20px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
`;
document.head.appendChild(fadeInStyle);

console.log(`
✨ Welcome to The Authentication System! ✨`);

setInterval(() => {
    if (Math.random() < 0.1) { 
        createSparkle();
    }
}, 5000);