import './style.css'

console.log('System initialized. Welcome, user.');

// Simple interaction for the links (placeholder for now)
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', (e) => {
    // e.preventDefault(); // Uncomment to handle navigation via JS later
    console.log(`Navigating to ${e.target.innerText}...`);
  });
});
