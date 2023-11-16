import React, { useEffect } from 'react';

import { useGetYandexLinkQuery } from '../../api/authApi';

function YandexHiddenFrame({ redirectTo }) {
  return <iframe hidden={true} title='yandex-hidden-frame' src={redirectTo} />;
}

function checkAccessKey1() {
  const parts = window.location.href.split('#');
  console.log(parts);
  const queryPartUrl =
    parts.length > 1 && parts[1] !== 'frame' ? parts[1] : null;

  if (!queryPartUrl) {
    return null;
  }

  const result = {};
  queryPartUrl.split('&').forEach(function (part) {
    const item = part.split('=');
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function checkAccessKey() {
  const parts = window.location.href.split('?');
  // console.log(parts);
  const queryPartUrl = parts.length > 1 ? parts[1] : null;

  if (!queryPartUrl) {
    return null;
  }

  const result = {};
  queryPartUrl.split('&').forEach(function (part) {
    const item = part.split('=');
    result[item[0]] = decodeURIComponent(item[1]);
  });
  console.log(result);
  return result;
}

function getYandexAuthUrl(clientID, redirectUrl, stateUrl) {
  let requestUrl =
    'https://oauth.yandex.ru/authorize?response_type=code&client_id=' +
    clientID;
  requestUrl += '&redirect_uri=' + encodeURIComponent(redirectUrl);
  requestUrl += '&state=' + encodeURIComponent(stateUrl);
  requestUrl += '&display=popup';

  return requestUrl;
}

function getCurrentUrl() {
  const currentUrl = window.location.origin;

  if (currentUrl[currentUrl.length - 1] === '/') {
    currentUrl = currentUrl.slice(0, currentUrl.length - 1);
  }

  return currentUrl;
}

function getStateParams(url) {
  const parts = url.split('&');
  const state = parts[2].split('=')[1];
  console.log(state);
  return state;
}

function YandexLogin({ children, onSuccess, clientID }) {
  const { data } = useGetYandexLinkQuery();

  const handleMessageFromPopup = function handleMessageFromPopup(event) {
    if (event.data.source === 'yandex-login') {
      onSuccess(event.data.payload);
    }
  };

  const onClick = function onClick() {
    sessionStorage.setItem('yandexAutoLoginDisabled', 'false');
    const currentUrl = getCurrentUrl();
    const stateUrl = getStateParams(data?.authorization_url);
    const requestUrl = getYandexAuthUrl(clientID, currentUrl, stateUrl);
    // const requestUrl = data?.authorization_url;
    const h = 650;
    const w = 550;
    const y = window.top.outerHeight / 2 + window.top.screenY - h / 2;
    const x = window.top.outerWidth / 2 + window.top.screenX - w / 2;
    window.open(
      requestUrl,
      'popup',
      'width=' + w + ',height=' + h + ',top=' + y + ',left=' + x
    );
    window.addEventListener('message', handleMessageFromPopup, {
      once: true,
    });
  };

  let frameRedirectTo = null;
  const aki = checkAccessKey();
  const receiver = window.parent !== window ? window.parent : window.opener;

  useEffect(() => {
    if (aki && receiver) {
      receiver.postMessage(
        {
          source: 'yandex-login',
          payload: aki,
        },
        window.location.origin
      );

      window.close();
    }
    return () => {
      window.removeEventListener('message', handleMessageFromPopup);
    };
  });

  useEffect(() => {
    if (!aki && !receiver) {
      const autoLoginDIsabled = sessionStorage.getItem(
        'yandexAutoLoginDisabled'
      );
      frameRedirectTo =
        autoLoginDIsabled !== 'true'
          ? getYandexAuthUrl(clientID, getCurrentUrl())
          : null;
      window.addEventListener('message', handleMessageFromPopup, {
        once: false,
      });
    }
    return () => {
      window.removeEventListener('message', handleMessageFromPopup);
    };
  });

  const cloned = React.cloneElement(children, { onClick: onClick });

  return (
    <div>
      {cloned}
      {frameRedirectTo && <YandexHiddenFrame redirectTo={frameRedirectTo} />}
    </div>
  );
}

export { YandexLogin };

//# sourceMappingURL=index.js.map
