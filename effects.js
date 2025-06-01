document.addEventListener('DOMContentLoaded', function() {
    // Add sparkle effect on button clicks
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    createSparkle(e.clientX, e.clientY);
                }, i * 100);
            }
        });
    });

    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            createHeartEffect(this);
        });
    });

    addCuteNotifications();
});

function createSparkle(x, y) {
    const sparkles = ['✨', '♡', '★', '💜', '🌟'];
    const sparkle = document.createElement('div');
    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
    sparkle.style.position = 'fixed';
    sparkle.style.left = (x + (Math.random() - 0.5) * 40) + 'px';
    sparkle.style.top = (y + (Math.random() - 0.5) * 40) + 'px';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '9999';
    sparkle.style.transition = 'all 1s ease-out';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.style.transform = `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px)`;
        sparkle.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        if (document.body.contains(sparkle)) {
            document.body.removeChild(sparkle);
        }
    }, 1100);
}

function createHeartEffect(element) {
    const heart = document.createElement('div');
    heart.innerHTML = '♡';
    heart.style.position = 'absolute';
    heart.style.color = '#ff69b4';
    heart.style.fontSize = '16px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '100';
    heart.style.transition = 'all 0.8s ease-out';
    
    const rect = element.getBoundingClientRect();
    heart.style.left = (rect.right - 20) + 'px';
    heart.style.top = (rect.top + rect.height / 2) + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.transform = 'translateY(-30px)';
        heart.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        if (document.body.contains(heart)) {
            document.body.removeChild(heart);
        }
    }, 900);
}

function addCuteNotifications() {
    const originalAlert = window.alert;
    window.alert = function(message) {
        showCuteNotification(message);
    };
}

function showCuteNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #ff69b4 0%, #8b5a9f 100%);
        color: white;
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(139, 90, 159, 0.4);
        z-index: 10000;
        font-family: 'Nunito', sans-serif;
        font-weight: 600;
        font-size: 14px;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;

    const cuteMessage = message.includes('success') || message.includes('Success') 
        ? `♡ ${message} ♡` 
        : message.includes('error') || message.includes('Error')
        ? `★ ${message} ★`
        : `♡ ${message}`;
    
    notification.textContent = cuteMessage;
    

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
 
    notification.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    });
}

function addFloatingAnimation() {
    const container = document.querySelector('.container');
    if (container) {
        container.addEventListener('mouseenter', () => {
            container.style.transform = 'translateY(-5px)';
        });
        
        container.addEventListener('mouseleave', () => {
            container.style.transform = 'translateY(0)';
        });
    }
}


addFloatingAnimation();


function addTypingEffect() {
    const inputs = document.querySelectorAll('input[type="text"]');
    inputs.forEach(input => {
        const originalPlaceholder = input.placeholder;
        
        input.addEventListener('focus', function() {
            if (this.value === '') {
                this.placeholder = '';
                typeText(this, originalPlaceholder);
            }
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.placeholder = originalPlaceholder;
            }
        });
    });
}

function typeText(element, text) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.placeholder += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);
}

