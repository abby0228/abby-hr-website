// Logo Typing Animation Script
document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const typingLogo = document.getElementById('typingLogo');
    const text = 'abby';
    let index = 0;
    
    function typeText() {
        if (index < text.length) {
            const cursor = typingLogo.querySelector('.cursor');
            const textNode = document.createTextNode(text[index]);
            typingLogo.insertBefore(textNode, cursor);
            index++;
            setTimeout(typeText, 200); // 200ms間隔で1文字ずつ
        }
        // タイピング完了後もカーソルは点滅し続ける
    }
    
    // 0.5秒後にタイピング開始
    setTimeout(typeText, 500);
    
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Optional: Add scroll progress indicator
    window.addEventListener('scroll', function() {
        const scrollIndicator = document.getElementById('scrollIndicator');
        if (scrollIndicator && window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
        }
    });


});
