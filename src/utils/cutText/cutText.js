export default (description, maxLength) => {
  if (description.length < 1) return 'Error'
  if (description.length <= maxLength) return description
  return description.substr(0, description.lastIndexOf(' ', maxLength)) + '...'
}
