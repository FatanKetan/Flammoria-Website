function setupDetail(element) {
  const eventName = element.getAttribute("data-event-name");
  const descEvent = element.getAttribute("data-desc-event");
  showDetail(eventName, descEvent);
}

function showDetail(eventName, descEvent) {
  document.getElementById("detail").style.display = "flex";
  document.getElementById("detail-heading").innerText = eventName;
  document.getElementById("detail-desc").innerText = descEvent;
}

function showDetail(title, desc) {
  const detail = document.getElementById("detail");
  const heading = document.getElementById("detail-heading");
  const description = document.getElementById("detail-desc");
  const content = detail.querySelector(".content");

  heading.innerHTML = `<span class="fancy-title">${title}</span>`;
  description.innerHTML = desc;

  detail.style.display = "flex"; // tampilkan popup

  setTimeout(() => {
    if (description.scrollHeight > content.clientHeight * 0.8) {
      content.style.justifyContent = "flex-start";
    } else {
      content.style.justifyContent = "center";
    }
  }, 50);
}

function closeDetail() {
  document.getElementById("detail").style.display = "none";
}
