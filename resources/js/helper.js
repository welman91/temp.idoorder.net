export const urlModifier = (current_url, parameter, query) => {
  const url = new URL(current_url)
  const search_params = url.searchParams
  search_params.set(parameter, query)
  url.search = search_params.toString()
  return url.toString()
}

export const getParameterFromUrl = (field, current_url = null) => {
  // Get the URL of the current page
  const currentUrl = current_url ?? window.location.href
  // Create a URLSearchParams object from the query parameters of the URL
  const searchParams = new URLSearchParams(new URL(currentUrl).search)
  // Get the 'search' parameter value
  const fieldValue = searchParams.get(field)

  return fieldValue
}
