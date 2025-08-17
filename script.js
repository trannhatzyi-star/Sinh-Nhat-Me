// Hàm mở modal với nội dung tương ứng
function openModal(type) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = ''; // Xóa nội dung cũ

    if (type === 'thiep') {
        modalBody.innerHTML = `
            <h2>Tấm Thiệp Chúc Mừng</h2>
            <p>Mẹ yêu dấu, cảm ơn mẹ vì đã luôn bên con qua mọi khó khăn. Chúc mẹ sinh nhật vui vẻ, khỏe mạnh và tràn đầy niềm vui! Con yêu mẹ nhiều lắm!</p>
            <img src="images/anh-me.jpg" alt="Ảnh kỷ niệm" style="width:100%; border-radius:10px;">
        `;
    } else if (type === 'album') {
        modalBody.innerHTML = `
            <h2>Album Kỷ Niệm</h2>
            <p>Đây là những bức ảnh đẹp nhất về mẹ và gia đình.</p>
            <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
                <img src="images/anh-ky-niem1.jpg" alt="Ảnh 1" style="width:45%; margin-bottom:10px; border-radius:10px;">
                <img src="images/anh-ky-niem2.jpg" alt="Ảnh 2" style="width:45%; border-radius:10px;">
            </div>
        `;
    } else if (type === 'video') {
        modalBody.innerHTML = `
            <h2>Video Chúc Mừng</h2>
            <video width="100%" controls>
                <source src="videos/video-chuc-mung.mp4" type="video/mp4">
            </video>
        `;
    } else if (type === 'loi-chuc') {
        modalBody.innerHTML = `
            <h2>Lời Chúc Từ Gia Đình</h2>
            <ul>
                
                <li>Bố: "Chúc Tuấn chúc mẹ luôn mạnh khỏe bên gia chồng và các con!"</li>
                <li>Em: "Chúc mẹ xinh đẹp dễ thương tuổi mới tràn trề năng lượng!"</li>
                <li>Con Trai:"Chúc mẹ sinh nhật vui vẻ trẻ khỏe?!"</li>
                            </ul>
        `;
    }

    modal.style.display = 'flex';

    // Hiệu ứng trái tim bay khi click
    confetti({
        particleCount: 50,
        spread: 60,
        shapes: [confetti.shapeFromText({ text: '❤️', scalar: 2 })],
        scalar: 1.5,
        origin: { y: 0.8 }
    });
}

// Hàm đóng modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}