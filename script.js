const btn = document.querySelector('.btn');
const code = document.querySelector('.code');
const input = document.querySelector('.input');
const toast = document.querySelector('#toast');
const shareBtn = document.querySelector('#shareBtn'); // Add this line

btn.addEventListener('click', generate);

function generate() {
    const data = input.value;
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data}`;
    code.src = URL;

    toastDiv();
    shareBtn.style.display = "inline-block"; // Show share button after generating QR code
}

function toastDiv() {
    toast.className = "show";
    setTimeout(function () {
        toast.className = toast.className.replace("show", "");
    }, 2000);
}

// Function to share the generated QR code URL
function shareQR() {
    const qrUrl = code.src;
    if (navigator.share) {
        navigator.share({
            title: "Shared QR Code",
            text: "Check out this QR code!",
            url: qrUrl
        }).then(() => console.log('Successful share')).catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback for browsers that don't support Web Share API
        alert("Share this URL: " + qrUrl);
    }
}

shareBtn.addEventListener('click', shareQR); // Attach event listener to the share button
