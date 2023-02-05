/*------------------------------------------------------------------------------------------*/
/* Toast Notifications Component */
/*------------------------------------------------------------------------------------------*/

const toastNotifications = document.querySelector(".notifications");

// add toast notification
export function addNotification({ id, type, msg, autoHide }) {

  // return if disabled
  if (!toastNotifications) { return; }

  const notificationLength = toastNotifications.children.length;
  const notifyId = id || `notify_${Date.now()}${notificationLength}`;
  const addNotify = () => {
    toastNotifications.insertAdjacentHTML("beforeend",
    `<li id="${notifyId}" class="notifications__item notify-enter ${type}">
      <div class="notifications__icon"></div>
      <span class="notifications__text">${msg}</span>
      <button class="notifications__dismiss"></button>
    </li>`);
  };

  if (id) {
    !toastNotifications.querySelector(`#${id}`) && addNotify();
  } else {
    addNotify();
  }

  // auto dismiss the notification
  autoHide && detachNotification(document.getElementById(notifyId), 5000);
}

// dismiss toast notification
export function dismissNotification(id) {
  const notification = toastNotifications.querySelector(`#${id}`);

  if (!notification) { return; }

  detachNotification(notification);
}

// remove toast notification
function removeNotification(e) {
  if (e.target?.classList.contains("notifications__dismiss")) { 
    detachNotification(e.target.parentElement);
  }
}
toastNotifications.addEventListener("click", removeNotification);

// detach toast notification
function detachNotification(notification, delay = 0) {

  notification.classList.remove("notify-enter");
  setTimeout(() => notification.classList.add("notify-leave"), delay);

  notification.addEventListener("animationend", () => notification.remove());
}
