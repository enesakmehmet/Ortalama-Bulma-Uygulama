// Form elemanını seç
const gradeForm = document.getElementById('gradeForm');
const resultDiv = document.getElementById('result');

// Form gönderildiğinde çalışacak fonksiyon
gradeForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Formun varsayılan gönderme işlemini engelle

    // Kullanıcıdan alınan değerleri al
    const vize1 = Number(document.getElementById('vize1').value);
    const vize2 = Number(document.getElementById('vize2').value);
    const final = Number(document.getElementById('final').value);

    // Ortalama hesaplama
    const ortalama = (vize1 * 0.3) + (vize2 * 0.3) + (final * 0.4);

    // Sonucu göster
    if (ortalama >= 60) {
        resultDiv.innerHTML = `<p style="color: green;">Dersten geçtiniz, tebrikler! Ortalama: ${ortalama.toFixed(2)}</p>`;
    } else {
        resultDiv.innerHTML = `<p style="color: red;">Kaldınız, geçmiş olsun. Ortalama: ${ortalama.toFixed(2)}</p>`;
    }
});
