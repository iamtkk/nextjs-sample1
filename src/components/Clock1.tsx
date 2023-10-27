import React, { useEffect, useState } from 'react';

const KEY_LOCALE = 'KEY_LOCALE';
const INTERVAL_TIME = 1000;

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

const Clock1 = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, INTERVAL_TIME);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  useEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);
  return (
    <div>
      <div>
        <span id="current-time-label">현재시간:</span>
        <span>{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ko-KR">ko-KR</option>
        </select>
      </div>
    </div>
  );
};

export default Clock1;
