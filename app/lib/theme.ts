// Single owner of the theme contract: the `dark` class on <html> plus
// localStorage("theme"). The inline script in layout.tsx applies the stored or
// system value before first paint; everything after that goes through here.

export function isDarkTheme(): boolean {
  return document.documentElement.classList.contains("dark");
}

export function toggleTheme(): boolean {
  const dark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
  window.dispatchEvent(new Event("themechange"));
  return dark;
}
