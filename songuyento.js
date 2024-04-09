function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Tìm và hiển thị tất cả các số nguyên tố nhỏ hơn 10000
document.addEventListener("DOMContentLoaded", function() {
    const primeList = document.getElementById("primeList");
    for (let i = 2; i < 10000; i++) {
        if (isPrime(i)) {
            const listItem = document.createElement("li");
            listItem.textContent = i;
            primeList.appendChild(listItem);
        }
    }
});

