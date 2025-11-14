// Footer info
const y = document.getElementById("year");
const lm = document.getElementById("lastmod");
if (y) y.textContent = new Date().getFullYear();
if (lm) lm.textContent = document.lastModified;

// Weather (valores estáticos por ahora)
const tempEl  = document.getElementById("temp");   // °C
const windEl  = document.getElementById("wind");   // km/h
const chillEl = document.getElementById("windchill");

// Métrico (Environment Canada)
const calcWindChillC = (t, v) =>
  13.12 + 0.6215*t - 11.37*Math.pow(v, 0.16) + 0.3965*t*Math.pow(v, 0.16);

const T = Number(tempEl?.textContent ?? 0);
const V = Number(windEl?.textContent ?? 0);

if (T <= 10 && V > 4.8) {
  const wc = Math.round(calcWindChillC(T, V));
  if (chillEl) chillEl.textContent = `${wc} °C`;
} else {
  if (chillEl) chillEl.textContent = "N/A";
}
