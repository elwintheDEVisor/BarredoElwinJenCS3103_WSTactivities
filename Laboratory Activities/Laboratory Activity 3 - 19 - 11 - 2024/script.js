// Select the input field and counters
const textInput = document.getElementById("textInput");
const wordCountDisplay = document.getElementById("wordcount");
const sentenceCountDisplay = document.getElementById("sentenceCount");

// Event listener for text input
textInput.addEventListener("input", () => {
  // Retrieve the input text
  const text = textInput.value.trim();

  // Count words (split by spaces and filter out empty strings)
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;

  // Count sentences by finding punctuation marks at the end of sentences
  const sentences = text.match(/([.!?])(?=\s|$)/g) || [];
  const sentenceCount = sentences.length;

  // Update the displays
  wordCountDisplay.textContent = `Words: ${wordCount}`;
  sentenceCountDisplay.textContent = `Sentences: ${sentenceCount}`;
});
