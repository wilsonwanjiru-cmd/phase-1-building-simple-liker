// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Get the error modal element
const errorModal = document.getElementById('modal');

// Function to toggle the heart state
function toggleHeart(heart) {
  if (heart.innerText === EMPTY_HEART) {
    mimicServerCall()
      .then(() => {
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart');
      })
      .catch(() => {
        errorModal.classList.remove('hidden');
        errorModal.querySelector('#modal-message').innerText = 'Random server error. Try again.';
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  } else if (heart.innerText === FULL_HEART) {
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

// Attach click event listener to all hearts
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach((heart) => {
  heart.addEventListener('click', () => {
    toggleHeart(heart);
  });
});







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
