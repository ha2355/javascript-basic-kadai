const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const heading = document.querySelector('h2');
    heading.textContent = 'ボタンをクリックしました';
});
