const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToaBoard: true,
  showRandomColorGenerator: true,
  showAccordion: true,
  showTreeView: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
    // after 500 milliseconds, resolve will run passing dummyApiResponse.
    else reject("Some error occurred! "); // if fail, it will pass the error message
  });
}

export default featureFlagsDataServiceCall;
