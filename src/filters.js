export default {
  truncate(value, size) {
    if (!value) return "";
    value = value.toString();
    if (value.length <= size) {
      return value;
    }
    return value.substring(0, size) + "...";
  }
};
