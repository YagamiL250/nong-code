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
                alert( "เลขที่" + name +"-ไม่มีหน้า/หาตัวเจอแล้ว");
            }
        })
        .catch(() => {
            alert("ไม่พบหน้า: " + fileName);
        });
}

const particleCount = 100;
const body = document.body

for (let i = 0; i < particleCount; i++) {
    let p = document.createElement("div");
    p.classList.add("particleCount");

    let size = Math.random() * 4 + 1.5;
    p.style.width = size + "px";
    p.style.height = size +"px";

    p.style.left = Math.random() * 100 + "%";

    p.style.animationDelay = Math.random() * 8 + "s";

    let duraticon  = Math.random() + 8 + 2;
    p.style.animationDuration = duraticon + "s";

    p.style.top = Math.random() * 20 + 100 + "%";

    body.appendChild(p);
}