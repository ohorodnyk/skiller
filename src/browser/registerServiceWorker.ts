import runtime from "serviceworker-webpack-plugin/lib/runtime";

// tslint:disable:no-console

function registerServiceWorker() {
  if (process.env.NODE_ENV !== "development" && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      runtime
        .register()
        .then(registration => {
          registration.onupdatefound = () => {
            const installingWorker = registration.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === "installed") {
                  if (navigator.serviceWorker.controller) {
                    // At this point, the old content will have been purged and
                    // the fresh content will have been added to the cache.
                    // It's the perfect time to display a 'New content is
                    // available please refresh.' message in your web app.
                    console.log("New content is available please refresh.");
                  } else {
                    // At this point, everything has been precached.
                    // It's the perfect time to display a
                    // 'Content is cached for offline use.' message.
                    console.log("Content is cached for offline use.");
                  }
                }
              };
            }
          };
        })
        .catch(error => {
          console.error("Error during service worker registration:", error);
        });
    });
  }
}

export function unregisterServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

export default registerServiceWorker;
