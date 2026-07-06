function showPasswordTips() {
    document.getElementById("tipsBox").innerHTML = `
        <div class="tip-card">
            <h2>🔐 Strong Password Tips</h2>
            <p>✔ Use at least 12 characters.</p>
            <p>✔ Mix uppercase and lowercase letters.</p>
            <p>✔ Include numbers and symbols.</p>
            <p>✔ Never reuse the same password.</p>
        </div>
    `;
}