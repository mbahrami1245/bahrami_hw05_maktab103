function showNotification() {
    const message = prompt("Enter the notification message:");
    if (!message) return; 
  
    const position = prompt("Enter the position (top or bottom):") || "top";
  
    const backgroundColor = prompt("Enter background color (optional):");
    const textColor = prompt("Enter text color (optional):");
    const duration = parseInt(prompt("Enter duration in milliseconds (optional):")) || 3000;
  
    const notification = document.createElement("div");
    notification.className = "notification";
    notification.style.backgroundColor = backgroundColor || "lightblue";
    notification.style.color = textColor || "black";
  
    if (position === "bottom") {
      notification.style.bottom = "10px";
    } else {
      notification.style.top = "10px"; 
    }
  
    notification.textContent = message;
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.remove();
    }, duration);
  }
  
  // Example usage:
  showNotification();
  