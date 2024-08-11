const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ro-RO", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export default formatDate;
