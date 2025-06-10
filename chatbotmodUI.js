document.addEventListener("DOMContentLoaded", () => {
  const messagesContainer = document.getElementById("chat-messages");
  const inputField = document.getElementById("user-input");

  function appendMessage(text, sender, sentiment = null) {
    const bubble = document.createElement("div");
    bubble.classList.add("chat-bubble");

    if (sender === "user") {
      bubble.classList.add("user-bubble");
      bubble.innerHTML = `🧑‍💻 You: ${text}`;
    } else {
      bubble.classList.add("bot-bubble");
      if (sentiment === "positive") bubble.classList.add("positive-style");
      if (sentiment === "neutral") bubble.classList.add("neutral-style");
      if (sentiment === "negative") bubble.classList.add("negative-style");
      bubble.innerHTML = `🤖 Vortex AI: ${text}`;
    }

    messagesContainer.style.display = "block";
    messagesContainer.appendChild(bubble);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  async function handleSend() {
    const userText = inputField.value.trim();
    if (!userText) return;

    // Hide logo section
    const logoSection = document.getElementById("vortex-logo");
    if (logoSection) logoSection.style.display = "none";

    appendMessage(userText, "user");
    inputField.value = "";

    try {
      // 🧠 First: Send message to Flask /chat endpoint
      const response = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();

      // 📍 Construct chatbot response with sentiment info
      const messageWithConfidence = `
        ${data.response}
        <br><small>Sentiment: ${data.sentiment_tag.toUpperCase()} (Confidence: ${(data.confidence * 100).toFixed(1)}%)</small>
      `;
      appendMessage(messageWithConfidence, "bot", data.sentiment_tag);

      // 📦 Display recommendations from /chat if any
      if (data.songs && data.songs.length > 0) {
        let html = "<strong>🎵 Songs you might like:</strong><br>";
        data.songs.forEach((song) => {
          html += `
            <div style="margin: 10px 0; padding: 10px; border-radius: 10px; border: 1px solid #ccc;">
              <img src="${song.album_cover}" alt="Album Art" style="width: 80px; height: 80px; border-radius: 10px;"><br>
              <strong>${song.name}</strong> by ${song.artist}<br>
              <a href="${song.spotify_url}" target="_blank">🎧 Listen on Spotify</a>
            </div>
          `;
        });
        appendMessage(html, "bot");
      }

      // 🎯 Map sentiment to Spotify query keyword
      const sentimentToQuery = {
        positive: "feel good",
        neutral: "chill",
        negative: "sad"
      };



      const query = userText;




      // 🎧 Second: Fetch songs from /spotify endpoint
      const spotifyResponse = await fetch("http://127.0.0.1:5000/spotify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const spotifyData = await spotifyResponse.json();

      if (spotifyData && spotifyData.tracks && spotifyData.tracks.length > 0) {
        let html = "<strong>🎵 More songs you may enjoy:</strong><br>";
        spotifyData.tracks.slice(0, 3).forEach(track => {
          html += `
            <div style="margin: 10px 0;">
              <img src="${track.album_cover}" alt="cover" style="width: 50px; height: 50px; vertical-align: middle; border-radius: 4px;" />
              <a href="${track.spotify_url}" target="_blank" style="margin-left: 10px;">${track.name}</a>
              <small style="color: #888;"> by ${track.artist}</small>
            </div>
          `;
        });
        appendMessage(html, "bot", data.sentiment_tag);
      } else {
        appendMessage("Couldn't find related music at the moment.", "bot", "neutral");
      }

    } catch (err) {
      console.error("Spotify fetch failed:", err);
      appendMessage("Sorry, something went wrong. Please try again.", "bot", "negative");
    }
  }

  // ⌨️ Enter key triggers send
  inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") handleSend();
  });
});
