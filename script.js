function searchPage() {
    const name = document.getElementById("searchInput").value.trim();
    if (!name) return alert("กรุณากรอกชื่อหน้าก่อนค่ะ");

    // แปลงชื่อให้เป็นชื่อไฟล์ เช่น about → about.html
    const fileName = `number/${name}.html`;

    // ตรวจสอบว่าหน้ามีอยู่จริงไหม
    fetch(fileName)
        .then(res => {
            if (res.ok) {
                // ถ้ามี → ไปหน้าเลย
                window.location.href = fileName;
            } else {
                alert("ไม่พบหน้า: " + fileName);
            }
        })
        .catch(() => {
            alert("ไม่พบหน้า: " + fileName);
        });
}
