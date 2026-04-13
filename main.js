document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const urlParams = Object.fromEntries(params.entries());
  console.log("Зчитані параметри з URL:", urlParams);

  const offerButton = document.querySelector("#my-button");
  if (offerButton && window.location.search) {
    const baseUrl = offerButton.getAttribute("href").split("?")[0];
    const newQueryString = params.toString();
    const newHref = `${baseUrl}?${newQueryString}`;

    offerButton.setAttribute("href", newHref);
    console.log(`✅ Кнопку оновлено: ${newHref}`);
  }

  const debugSpan = document.querySelector("#debugId");
  if (debugSpan) {
    debugSpan.textContent = urlParams.click_id
      ? urlParams.click_id
      : "ID не знайдено";
  }
});
