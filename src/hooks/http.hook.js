async function useGetCurrent(url) {
  const response = await fetch(url);

  return await response.json();
}

export default useGetCurrent;
