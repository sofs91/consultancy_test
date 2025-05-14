function loadYouTube() {
  const hasConsent = window.Usercentrics && Usercentrics.getConsents().some(
    c => c.templateId.includes("youtube") && c.status === true
  );

  if (hasConsent) {
    const placeholder = document.getElementById("youtube-placeholder");
    placeholder.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/tWLt4t-rrRo" frameborder="0" allowfullscreen></iframe>';
  } else {
    Usercentrics.showFirstLayer();
  }
}
