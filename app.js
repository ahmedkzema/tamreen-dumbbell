setTimeout(() => {
  document.getElementById("splash").style.display = "none";
}, 3000);

function show(type) {
  const c = document.getElementById("content");

  if (type === "dumbbell") {
    c.innerHTML = `
      <div class="card">
        <h3>ضغط صدر دمبل</h3>
        <img src="images/press-chest.jpg">
        <p>4 × 12</p>
      </div>

      <div class="card">
        <h3>بايسبس دمبل</h3>
        <img src="images/biceps.jpg">
        <p>4 × 12</p>
      </div>
    `;
  }

  if (type === "body") {
    c.innerHTML = `
      <div class="card">
        <h3>تمرين الضغط</h3>
        <img src="images/pushup.jpg">
        <p>3 × 15</p>
      </div>

      <div class="card">
        <h3>سكوات</h3>
        <img src="images/squat.jpg">
        <p>4 × 20</p>
      </div>
    `;
  }

  if (type === "program") {
    c.innerHTML = `
      <div class="card">
        <h3>جدول 3 أيام</h3>
        <p>اليوم 1: صدر + ذراع</p>
        <p>اليوم 2: ظهر + كتف</p>
        <p>اليوم 3: أرجل + بطن</p>
      </div>
    `;
  }
}
