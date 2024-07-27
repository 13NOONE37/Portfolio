const scrollToId = (id: string, offset?: number) => {
  const scrollOffset = offset ?? 120;
  const element = document.getElementById(id);

  if (!element) return;
  const { top } = element.getBoundingClientRect();
  const scrollPosition = top + window.scrollY - scrollOffset;

  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
  });
};
export default scrollToId;
