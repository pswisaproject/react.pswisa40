export function deepCopy (obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  export function isEmpty (variable) {
    if (typeof variable === 'string' || Array.isArray(variable)) {
      return variable.length === 0;
    } else if (typeof variable === 'object') {
      return Object.keys(variable).length === 0;
    }
  }
  
  export function capitalize (string) {
    return string && string[0].toUpperCase() + string.slice(1);
  }
  
  export function capitalizeEachWord (string) {
    if (!string) {
      return '';
    }
    return string.replace(/(^|\s)\S/g, function (l) {
      return l.toUpperCase();
    });
  }
  
  export function getUrlParams (url) {
    if (!url || typeof url === 'undefined') return {};
    const str = url.split('?')[1].split('&');
    const obj = {};
    str.forEach(s => {
      const tmp = s.split('=');
      obj[tmp[0]] = tmp[1];
    });
    return obj;
  }
  
  export function getReduxStateFromStorage () {
    try {
      const serailizedState = localStorage.getItem('__REDUX_STATE__');
      if (serailizedState === null) {
        return undefined;
      }
      return JSON.parse(serailizedState);
    } catch (e) {
      return undefined;
    }
  }
  
  export function saveReduxStateToStorage (state) {
    try {
      const serailizedState = JSON.stringify(state);
      localStorage.setItem('__REDUX_STATE__', serailizedState);
    } catch (e) {
      console.log('CANNOT SAVE REDUX TO LOCAL STORAGE', e);
    }
  }
  
  export function deleteReduxStateFromStorage () {
    localStorage.setItem('__REDUX_STATE__', JSON.stringify({}));
  }
  
  export function getScrollState () {
    return {
      height: document.body.scrollHeight, // full height of page to scroll
      top: window.scrollY, // px scrolled from top
      bottom: document.body.scrollHeight - (window.scrollY + window.innerHeight) // px remains to reach bottom
    };
  }
  
  export function validateUsername (username) {
    var regExp = /^[A-Za-z0-9]{6,14}$/g;
    return regExp.test(username);
  }
  