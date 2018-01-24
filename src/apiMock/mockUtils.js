export default {
  mockPromise
}

function mockPromise(response) {
  return new Promise((resolve, reject) => {
    console.log('pending...')

    window.setTimeout(
      () => resolve({ data: response }),
      Math.random() * 2000 + 1000
    )
  })
}