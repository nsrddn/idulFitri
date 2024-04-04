// const nama = prompt("Masukkan Nama Anda");
if (!nama) {
    alert("Masukkan Nama Terlebih Dahulu");
    location.reload();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        let namaBaru = nama;
        if (nama.length > 10) {
            const arr = nama.split(" ");
            namaBaru = arr[arr.length - arr.length];
        }
        const sapa = document.querySelector('.sapaan');
        const tooltip = document.querySelector('.myTooltip');
        sapa.textContent = "Assalamualaikum, " + namaBaru;
        tooltip.style.display = "block";
        
        const audio = document.querySelector('#audio');
        const btn = document.querySelector('#btnPlay i');
        let isPlay = false;

        btn.addEventListener('click', function () {
            if (!isPlay) {
                audio.play();
                btn.classList.replace('bi-volume-mute-fill', 'bi-volume-up-fill');
                isPlay = true;
            } else {
                audio.pause();
                btn.classList.replace('bi-volume-up-fill', 'bi-volume-mute-fill');
                isPlay = false;
            }
        });
    })

}

