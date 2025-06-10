async function sendPrompt(prompt) {
  try {
    const response = await fetch("http://127.0.0.1:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt })
    });

    const result = await response.json();
    console.log("API Response:", result);

    const chatMessages = document.getElementById("chat-messages");

    // User message bubble
    const userBubble = document.createElement("div");
    userBubble.className = "user-bubble";
    userBubble.innerText = prompt;
    chatMessages.appendChild(userBubble);

    // Bot message bubble
    const botBubble = document.createElement("div");
    botBubble.className = "bot-bubble";

    if (result.response && result.sentiment_tag) {
      let sentimentColor = "#4caf50";
      if (result.sentiment_tag === "NEGATIVE") sentimentColor = "#f44336";
      else if (result.sentiment_tag === "NEUTRAL") sentimentColor = "#ff9800";

      botBubble.innerHTML = `
        <p><strong>Bot:</strong> ${result.response}</p>
        <p style="color:${sentimentColor};"><strong>Sentiment:</strong> ${result.sentiment_tag} 
        (Confidence: ${(result.confidence * 100).toFixed(1)}%)</p>
      `;

      // Remove duplicates using a Set of Spotify URLs
      const seenTracks = new Set();

      if (result.songs && result.songs.length > 0) {
        botBubble.innerHTML += `<h4>🎵 Recommended Tracks:</h4>`;
        result.songs.forEach(song => {
          if (!seenTracks.has(song.spotify_url)) {
            seenTracks.add(song.spotify_url);
            botBubble.innerHTML += `
              <div class="spotify-track">
                <img src="${song.album_cover}" alt="Album Art" />
                <div class="track-info">
                  <strong>${song.name}</strong><br>
                  <em>${song.artist}</em><br>
                  <a href="${song.spotify_url}" target="_blank">🎧 Play on Spotify</a>
                </div>
              </div>
            `;
          }
        });
      }
    } else {
      botBubble.innerText = "Failed to get response from chatbot.";
    }

    chatMessages.appendChild(botBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;

  } catch (err) {
    console.error(err);
    const errorBubble = document.createElement("div");
    errorBubble.className = "bot-bubble";
    errorBubble.innerText = "Server error. Try again.";
    document.getElementById("chat-messages").appendChild(errorBubble);
  }
}

function handleSend() {
  const inputField = document.getElementById("user-input");
  const prompt = inputField.value.trim();
  if (!prompt) return;

  sendPrompt(prompt);
  inputField.value = "";
}
