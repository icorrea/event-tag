import "./libs/prototypes";

const clickEventTag = (e) => {
  window.dataLayer = window.dataLayer || [];
  if (!e.target.dataset.isEmpty()) {
    window.dataLayer.push({
      event: "genericEvent",
      eventCategory: e.target.dataset.eventCategory,
      eventAction: e.target.dataset.eventAction,
      eventLabel: e.target.dataset.eventLabel,
    });
  }
};

export { clickEventTag }