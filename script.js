const timeData = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self-Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const filterButtons = document.querySelectorAll("button");
const containerCards = document.querySelectorAll(".container__card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.setAttribute("disabled", true);
    });
    if (btn.dataset.filter === "daily") {
      containerCards.forEach((container) => {
        cardContent = container.querySelector(".container__card-content");
        cardContent.style.animation = "upDown 2s ease-in-out";
        setTimeout(() => {
          modifyContainer(container, btn.dataset.filter);
        }, 1000);
        setTimeout(() => {
          filterButtons.forEach((btn) => {
            if (!(btn.dataset.filter === "daily")) {
              btn.removeAttribute("disabled");
            }
          });
          containerCards.forEach((container) => {
            cardContent = container.querySelector(".container__card-content");
            cardContent.style.animation = "";
          });
        }, 2000);
      });
      //   Done Here
    } else if (btn.dataset.filter === "weekly") {
      filterButtons.forEach((btn) => {
        btn.setAttribute("disabled", true);
      });
      containerCards.forEach((container) => {
        cardContent = container.querySelector(".container__card-content");
        cardContent.style.animation = "upDown 2s ease-in-out";
        setTimeout(() => {
          modifyContainer(container, btn.dataset.filter);
        }, 1000);
        setTimeout(() => {
          filterButtons.forEach((btn) => {
            if (!(btn.dataset.filter === "weekly")) {
              btn.removeAttribute("disabled");
            }
          });
          containerCards.forEach((container) => {
            cardContent = container.querySelector(".container__card-content");
            cardContent.style.animation = "";
          });
        }, 2000);
      });
      //Done Here
    } else if (btn.dataset.filter === "monthly") {
      filterButtons.forEach((btn) => {
        btn.setAttribute("disabled", true);
      });
      containerCards.forEach((container) => {
        cardContent = container.querySelector(".container__card-content");
        cardContent.style.animation = "upDown 2s ease-in-out";
        setTimeout(() => {
          modifyContainer(container, btn.dataset.filter);
        }, 1000);
        setTimeout(() => {
          filterButtons.forEach((btn) => {
            if (!(btn.dataset.filter === "monthly")) {
              btn.removeAttribute("disabled");
            }
          });
          containerCards.forEach((container) => {
            cardContent = container.querySelector(".container__card-content");
            cardContent.style.animation = "";
          });
        }, 2000);
      });
      //Done Here
    }
  });
});

function modifyContainer(container, filter) {
  if (filter === "daily") {
    if (container.classList.contains("work")) {
      filterContainer("Work", "daily", container);
    } else if (container.classList.contains("play")) {
      filterContainer("Play", "daily", container);
    } else if (container.classList.contains("study")) {
      filterContainer("Study", "daily", container);
    } else if (container.classList.contains("exercise")) {
      filterContainer("Exercise", "daily", container);
    } else if (container.classList.contains("social")) {
      filterContainer("Social", "daily", container);
    } else if (container.classList.contains("self-care")) {
      filterContainer("Self-Care", "daily", container);
    }
  }
  if (filter === "weekly") {
    if (container.classList.contains("work")) {
      filterContainer("Work", "weekly", container);
    } else if (container.classList.contains("play")) {
      filterContainer("Play", "weekly", container);
    } else if (container.classList.contains("study")) {
      filterContainer("Study", "weekly", container);
    } else if (container.classList.contains("exercise")) {
      filterContainer("Exercise", "weekly", container);
    } else if (container.classList.contains("social")) {
      filterContainer("Social", "weekly", container);
    } else if (container.classList.contains("self-care")) {
      filterContainer("Self-Care", "weekly", container);
    }
  }
  if (filter === "monthly") {
    if (container.classList.contains("work")) {
      filterContainer("Work", "monthly", container);
    } else if (container.classList.contains("play")) {
      filterContainer("Play", "monthly", container);
    } else if (container.classList.contains("study")) {
      filterContainer("Study", "monthly", container);
    } else if (container.classList.contains("exercise")) {
      filterContainer("Exercise", "monthly", container);
    } else if (container.classList.contains("social")) {
      filterContainer("Social", "monthly", container);
    } else if (container.classList.contains("self-care")) {
      filterContainer("Self-Care", "monthly", container);
    }
  }
}

function filterContainer(activity, filter, container) {
  const data = timeData.find((obj) => obj.title === activity);
  container.querySelector(".container__card-data-now").innerText = `${
    data.timeframes[filter].current
  }${data.timeframes[filter].current > 1 ? "hrs" : "hr"}`;
  container.querySelector(
    ".container__card-data-previous"
  ).innerText = `Last Week - ${data.timeframes[filter].previous}${
    data.timeframes[filter].previous > 1 ? "hrs" : "hr"
  }`;
}
