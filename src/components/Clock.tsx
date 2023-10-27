import React, { useEffect, useState } from 'react';

const UPDATE_CYCLE = 1000;
const KET_LOCALE = 'KEY_LOCALE';

enum Locale {
  US = 'en-US',
  KR = 'ko-KR',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.KR:
      return Locale.KR;
    default:
      return Locale.US;
  }
};

const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem(KET_LOCALE, locale);
  }, [locale]);

  useEffect(() => {
    const savedLocale = localStorage.getItem(KET_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  const mounted = React.useRef(false);
  useEffect(() => {
    if (mounted.current) {
      return;
    }
    mounted.current = true;
    const data = fetch('');
  }, []);

  return (
    <div>
      <p>
        <span id="current-time-label">현재 시각</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </p>
    </div>
  );
};

export default Clock;
